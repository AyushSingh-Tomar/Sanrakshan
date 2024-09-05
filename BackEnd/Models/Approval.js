const mongoose = require('mongoose');

// Admin-specific approval status schema with unique reference ID
const approvalStatusSchema = new mongoose.Schema({
    status: { type: String, default: 'pending' }, // 'pending', 'approved', 'rejected'
    referenceId: { type: String, default: function() { return `REF-${Date.now()}-${Math.floor(Math.random() * 10000)}`; }}, // Unique reference ID for each admin
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // User who approved
    approvedAt: { type: Date, default: null }, // Date and time of approval
});

const approvalSchema = new mongoose.Schema({
    mainReferenceId: { type: String, required: true, unique: true }, // Main reference ID created on document upload
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User who uploaded documents
    documents: [{ type: String, required: true }], // Paths to uploaded documents
    approvalStatus: {
        taadmin: { type: approvalStatusSchema, default: {} },
        sfoadmin: { type: approvalStatusSchema, default: {} },
        sfaadmin: { type: approvalStatusSchema, default: {} },
        fsiadmin: { type: approvalStatusSchema, default: {} },
        dfo: { type: approvalStatusSchema, default: {} },
        dcfo: { type: approvalStatusSchema, default: {} },
        cfo: { type: approvalStatusSchema, default: {} },
        adfo: { type: approvalStatusSchema, default: {} },
    },
    progressPercentage: { type: Number, default: 0 },
    currentLevel: { type: String, default: 'taadmin' }, // Track which admin level is currently responsible
});

const Approval = mongoose.model('Approval', approvalSchema);

module.exports = Approval;
