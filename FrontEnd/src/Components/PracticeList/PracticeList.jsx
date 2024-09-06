import { practiceList } from '../../assets/assets'; // Import practiceList from assets
import './PracticeList.css';
import Card from 'react-bootstrap/Card';

const PracticeList = () => {
  return (
    <div className='PracticeList' id="PracticeList">
      <h2>Practices You Should Follow</h2>
      <br></br>
      <div className="practice-documents">
        {practiceList.map((item, index) => (
          <div key={index} className="listitem">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Text>
                  {item.Description}
                </Card.Text>
                <Card.Link href="#">Read More</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export { PracticeList };
