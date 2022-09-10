import React from 'react';

function Card(props) {

  const { card, onClick } = props;
  
  return (
    
      <div className="photo-grid__item" key={card._id}>
        <img className="photo-grid__image" src={card.link} alt={card.name} onClick={() => onClick(card)} />
        <button className="photo-grid__delete" type="button"></button>
        <div className="photo-grid__bar">
          <h2 className="photo-grid__title">{card.name}</h2>
          <div className="photo-grid__like-box">
            <button className="photo-grid__like" type="button"></button>
            <p className="photo-grid__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </div>

  );

}

export default Card;