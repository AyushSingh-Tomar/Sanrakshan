const Approval = require('../Models/Approval');
const { io } = require('../server');

// Generic approval handler that generates unique reference ID for each admin level
const handleApproval = async (req, res, role, nextRole, percentage) => {
    const { mainReferenceId } = req.params;
    const { status } = req.body;
    const userId = req.user._id;

    try {
        const approval = await Approval.findOne({ mainReferenceId });

        if (!approval) {
            return res.status(404).json({ message: "Approval not found." });
        }

        // Generate new reference ID for the current role if not already generated
        if (!approval.approvalStatus[role].referenceId) {
            approval.approvalStatus[role].referenceId = `REF-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        }

        // Update approval status, who approved it, and when
        approval.approvalStatus[role].status = status;
        approval.approvalStatus[role].approvedBy = userId;
        approval.approvalStatus[role].approvedAt = new Date();

        if (status === 'approved') {
            approval.progressPercentage = percentage;
            approval.currentLevel = nextRole;
        }

        await approval.save();

        // Emit real-time progress update using socket.io
        io.emit('progressUpdate', {
            mainReferenceId: approval.mainReferenceId,
            currentAdminReferenceId: approval.approvalStatus[role].referenceId,
            progressPercentage: approval.progressPercentage,
        });

        // Respond with the details of the approval, including the unique reference ID for the admin
        return res.json({
            message: `${role.toUpperCase()} approval updated.`,
            approvalStatus: approval.approvalStatus[role],
            progress: approval.progressPercentage,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Controller functions for each admin panel
exports.taadminApprove = (req, res) => handleApproval(req, res, 'taadmin', 'sfoadmin', 10);
exports.sfoadminApprove = (req, res) => handleApproval(req, res, 'sfoadmin', 'sfaadmin', 20);
exports.sfaadminApprove = (req, res) => handleApproval(req, res, 'sfaadmin', 'fsiadmin', 30);
exports.fsiadminApprove = (req, res) => handleApproval(req, res, 'fsiadmin', 'dfo', 40);
exports.dfoApprove = (req, res) => handleApproval(req, res, 'dfo', 'dcfo', 50);
exports.dcfoApprove = (req, res) => handleApproval(req, res, 'dcfo', 'cfo', 70);
exports.cfoApprove = (req, res) => handleApproval(req, res, 'cfo', 'adfo', 90);
exports.adfoApprove = (req, res) => handleApproval(req, res, 'adfo', 'complete', 100);
