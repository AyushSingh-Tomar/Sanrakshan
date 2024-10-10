import "./DashBoard.css";

const DashBoard = ({ pendingApplications, scheduledApplications }) => {
  return (
    <>
   <div className="dashboard-container">
      <h2>Officer's Details</h2>
      <div className="card-container">
        <div className="dash">
          <p className="dash">Name : Manoj Singh</p>
          <p className="dash">Designation : Clerical Staff</p>
          
      </div>
    </div>
    </div>
    <div className="dashboard-container">
      <h2>Application Dashboard</h2>
      <div className="card-container">
        <div className="card">
          <h3>Pending Applications</h3>
          <p>{pendingApplications}</p>
        </div>
        <div className="card">
          <h3>Scheduled Applications</h3>
          <p>{scheduledApplications}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashBoard;
