import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { assets } from '../../assets/assets';
import Rendercard from './RenderCard';




function CardTab({ image, title, text, items, links }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {items.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        {links.map((link, index) => (
          <Card.Link key={index} href={link.href}>
            {link.text}
          </Card.Link>
        ))}
      </Card.Body>
    </Card>
  );
}
export { CardTab };



Card.jsx