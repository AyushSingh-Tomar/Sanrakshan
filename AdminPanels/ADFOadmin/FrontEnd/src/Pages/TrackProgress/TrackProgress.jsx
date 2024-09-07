import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {UserList} from '../../assets/assets'
import {useState} from 'react'
const TrackProgress = () => {
  const [variant, setVariant] = useState('primary');
  const [textx, settextx] = useState('Proceed');

  const handleClick = () => {
    setVariant(variant === 'primary' ? 'success' : 'primary');
    settextx(textx === 'Proceed' ? 'Approved' : 'Proceed');
  };
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
      <Button onClick={handleClick} variant={variant}>{textx}</Button>{' '}
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