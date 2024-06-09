import React from 'react';
import Button from './Button';

function Card({ title, src, alt, description, onButtonClick }) {
  return (
    <div className="card mb-4 shadow-sm" style={{ borderRadius: '20px', overflow: 'hidden' }}>
      <img src={src} className="card-img-top" alt={alt} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-grid">
          <Button className="gamebutton"  onClick={onButtonClick} style="width: 100%;">Spielen</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;