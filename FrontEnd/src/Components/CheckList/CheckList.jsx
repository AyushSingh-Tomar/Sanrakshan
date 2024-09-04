import './CheckList.css'
import Card from 'react-bootstrap/Card';
import {checkList} from '../../assets/assets'
const CheckList = () => {
  return (
    <div className='req-docs' id='req-docs'>
      <h1>List of Required Documents</h1>
      <p className='explore-documents-text'>Kindly ensure that you upload these important documents</p>
      <div className="explore-documents">
        {checkList.map((item,index)=>{
          return(<div key={index}className="listitem">
                <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Important for Id verification</Card.Subtitle>
        <Card.Text>
          <p>{item.Description}</p>
        </Card.Text>
        <Card.Link href="#">Read More</Card.Link>
        <Card.Link href="#">Upload</Card.Link>
      </Card.Body>
    </Card>
          </div>

          )
        })}
      </div>
    </div>
  )
}

export {CheckList}