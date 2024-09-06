import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';
const TrackProgress = () => {
  return (
    <>
    <div>
      <h1>Progress of your N.O.C procedure</h1>
     <ProgressBar animated now={45} />;

    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S no.</th>
          <th>Checkpoint</th>
          <th>Arrival </th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>First</td>
          <td>Clerical Staff</td>
          <td>10%</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Second</td>
          <td>Technical Assistants</td>
          <td>22%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Third</td>
          <td>Fire Safety Inspectors</td>
          <td>35%</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Fourth</td>
          <td>Assistant Divisional Fire Officer</td>
          <td>45%</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Fifth</td>
          <td>Station Fire Officer </td>
          <td>50%</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Sixth</td>
          <td>Divisional Fire Officer </td>
          <td>60%</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Seventh</td>
          <td>Deputy Chief Fire Officer</td>
          <td>70%</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Eighth</td>
          <td>Chief Fire Officer </td>
          <td>80%</td>
        </tr>
        <tr>
          <td>9</td>
          <td colSpan={2}>Completion</td>
          <td>100%</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default TrackProgress