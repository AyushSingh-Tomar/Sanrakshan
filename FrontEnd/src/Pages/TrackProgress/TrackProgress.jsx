import { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';
import { getProgress } from '../../utils/api.js';
import io from 'socket.io-client';

const TrackProgress = ({ referenceId }) => {
  const [progress, setProgress] = useState(0);
  const [stages, setStages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRejected, setIsRejected] = useState(false); // State to track rejection by decision

  useEffect(() => {
    // Fetch progress when the component mounts
    const fetchProgress = async () => {
      try {
        const response = await getProgress(referenceId);
        const stagesData = response.data.stages || [];
        setProgress(response.data.progressPercentage || 0);
        setStages(stagesData.filter(stage => stage.decision === 'Approved' || stage.decision === 'Rejected'));
        setIsRejected(stagesData.some(stage => stage.decision === 'Rejected')); // Check if any decision is rejected
        setLoading(false);
      } catch (err) {
        console.error('Error fetching progress:', err);
        setLoading(false);
      }
    };

    fetchProgress();

    // Setup Socket.io for real-time updates
    const socket = io('http://localhost:4000'); // Update with your server URL
    socket.on('progressUpdate', (data) => {
      if (data.referenceId === referenceId) {
        setProgress(data.progressPercentage);
        const stagesData = data.stages || [];
        setStages(stagesData.filter(stage => stage.decision === 'Approved' || stage.decision === 'Rejected'));
        setIsRejected(stagesData.some(stage => stage.decision === 'Rejected')); // Update rejection status by decision
      }
    });

    return () => {
      socket.disconnect(); // Clean up the connection
    };
  }, [referenceId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Progress of your N.O.C procedure</h1>
      <br></br>
      <h3>Reference ID: {referenceId}</h3>
      
      <ProgressBar animated now={progress} label={`${progress}%`} />
      <br></br>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S no.</th>
            <th>Checkpoint</th>
            <th>Status</th>
            <th>Decision</th>
            <th>Time</th>
            <th>Date</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {stages.map((stage, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{stage.role}</td>
              <td>{stage.status}</td>
              <td>{stage.decision}</td>
              <td>{stage.time || 'N/A'}</td>
              <td>{stage.date || 'N/A'}</td>
              <td>{stage.percentage}%</td>
            </tr>
          ))}
          {/* Show row for rejected decision */}
          {isRejected && (
            <tr className="rejection-row">
              <td colSpan="8" style={{ textAlign: 'center', backgroundColor: 'red' }}>
                The N.O.C process has been rejected.
              </td>
            </tr>
          )}
          {/* Conditional row rendering when progress is 100% */}
          {!isRejected && progress === 100 && (
            <tr className="completion-row">
              <td colSpan="8" style={{ textAlign: 'center', backgroundColor:'green'}}>
                Congratulations! The N.O.C process is complete.
              </td>
            </tr>
          )}
          {!isRejected && progress === 0 && (
            <tr className="completion-row">
              <td colSpan="8" style={{ textAlign: 'center', backgroundColor: 'yellow' }}>
                N.O.C process not started yet.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

TrackProgress.propTypes = {
  referenceId: PropTypes.string.isRequired,
};

export default TrackProgress;
