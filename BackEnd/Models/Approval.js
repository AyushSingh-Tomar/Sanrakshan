import mongoose from 'mongoose';

const approvalSchema = new mongoose.Schema({
  referenceId: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  document: { type: String, required: true },
  stages: [
    {
      role: { type: String, required: true },
      status: { type: String, required: true },
      decision: { type: String },
      time: { type: String },
      date: { type: String },
      percentage: { type: Number }
    }
  ],
  progressPercentage: { type: Number, default: 0 },
  finalStatus: { type: String }
});


// Middleware to set the current time and date when status is updated
approvalSchema.pre('save', function (next) {
  const now = new Date();

  // Update the time and date for stages where the status has been updated
  this.stages.forEach(stage => {
    if (stage.status !== 'Pending' && !stage.time) {
      stage.time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Format the date in 'dd-mm-yyyy'
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const year = now.getFullYear();
      stage.date = `${day}-${month}-${year}`; // dd-mm-yyyy format
    }
  });

  next();
});

export default mongoose.model('Approval', approvalSchema);
