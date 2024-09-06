import Approval from '../Models/Approval.js';
import { io } from '../server.js';

// Create new approval process
export const createApproval = async (req, res, next) => {
  const { userId, document } = req.body;
  const referenceId = `ref-${Date.now()}`; // Example reference ID generation

  const newApproval = new Approval({
    referenceId,
    userId,
    document,
    stages: [
      { role: 'Clerical Staff', status: 'Pending', percentage: 12.5 },
      { role: 'Technical Assistant', status: 'Pending', percentage: 25 },
      { role: 'Fire Safety Inspector', status: 'Pending', percentage: 37.5 },
      { role: 'Assistant Divisional Fire Officer', status: 'Pending', percentage: 50 },
      { role: 'Station Fire Officer', status: 'Pending', percentage: 62.5 },
      { role: 'Divisional Fire Officer', status: 'Pending', percentage: 75 },
      { role: 'Deputy Chief Fire Officer', status: 'Pending', percentage: 87.5 },
      { role: 'Chief Fire Officer', status: 'Pending', percentage: 100 },
    ],
    progressPercentage: 0
  });

  try {
    await newApproval.save();
    res.status(201).json({ referenceId, message: 'Approval process started successfully', stages: newApproval.stages });
  } catch (err) {
    next(err);
  }
};

// Update approval status
export const updateApprovalStatus = async (req, res, next) => {
  const { referenceId } = req.params;
  const { adminRole, status, decision, time, date } = req.body;

  try {
    const approval = await Approval.findOne({ referenceId });
    if (!approval) {
      return res.status(404).json({ message: 'No approval process found with that reference ID' });
    }

    let progressPercentage = 0;
    approval.stages.forEach(stage => {
      if (stage.role === adminRole) {
        stage.status = status;
        stage.decision = decision;
        stage.time = time;
        stage.date = date;
        progressPercentage = stage.percentage;
      }
    });

    // Calculate progress percentage based on stages
    const completedStages = approval.stages.filter(stage => stage.status === 'Approved');
    const totalStages = approval.stages.length;
    approval.progressPercentage = (completedStages.length / totalStages) * 100;

    if (completedStages.length === totalStages) {
      approval.finalStatus = 'Completed';
    }

    await approval.save();

    // Notify clients via WebSocket
    io.emit('progressUpdate', {
      referenceId,
      progressPercentage: approval.progressPercentage,
      stages: approval.stages
    });

    res.status(200).json({
      message: 'Approval updated',
      progressPercentage: approval.progressPercentage,
      stages: approval.stages,
      finalStatus: approval.finalStatus
    });
  } catch (err) {
    next(err);
  }
};

// Get approval progress
export const getApprovalProgress = async (req, res, next) => {
  const { referenceId } = req.params;

  try {
    const approval = await Approval.findOne({ referenceId });
    if (!approval) {
      return res.status(404).json({ message: 'No approval process found with that reference ID' });
    }

    res.status(200).json({
      progressPercentage: approval.progressPercentage,
      stages: approval.stages
    });
  } catch (err) {
    next(err);
  }
};
