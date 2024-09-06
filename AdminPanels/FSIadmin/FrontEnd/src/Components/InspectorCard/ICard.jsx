// PersonCard.js

import './ICard.css'; // Import the CSS file for styling

function Card({ image, name, title, description }) {
  return (
    <div className="person-card">
      <img src={image} alt={`${name}`} className="person-card-image" />
      <div className="person-card-details">
        <h2 className="person-card-name">{name}</h2>
        <h4 className="person-card-title">{title}</h4>
        <p className="person-card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
