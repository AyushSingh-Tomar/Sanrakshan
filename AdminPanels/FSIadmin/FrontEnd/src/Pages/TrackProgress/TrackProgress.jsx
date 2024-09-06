import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {UserList} from '../../assets/assets'
const TrackProgress = () => {
  return (
    <div className='req-docs' id='req-docs'>
    <h1>List of Pending N.O.C requests</h1>
    <div className="explore-documents">
      {UserList.map((item,index)=>{
        return(<div key={index}className="listitem">
              <Card style={{ width: '100%' }}>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{"Reference id "+ item.Reference_Id}</Card.Subtitle>
      <Card.Subtitle>
        {"Status :"+ item.CheckMark}
      </Card.Subtitle>
      <Button variant="outline-primary">Proceed</Button>{' '}
      <Button variant="outline-warning">Hault</Button>{' '}
      <Button variant="outline-danger">Reject</Button>{' '}
    </Card.Body>
  </Card>
        </div>

        )
      })}
    </div>
  </div>
  )
}

export default TrackProgress