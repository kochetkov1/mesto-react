import api from '../utils/Api'
import React from 'react'
import Card from './Card'

function Main(props) {

  const {
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
  } = props;

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()])
      .then(([data, initialCards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(initialCards);
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (

    <main className="content">

      <section className="profile">

        <button className="profile__photo-edit-button" onClick={onEditAvatar} >
          <img className="profile__photo" src={userAvatar} alt="Фотография профиля" />
          <div className="profile__photo-shadow"></div>
        </button>
        <div className="profile__name-block">
          <div className="profile__name-button-box">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>

      </section>

      <section className="photo-grid">

        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            onClick={onCardClick}
          />
        ))}

      </section>

    </main>

  );
}

export default Main;