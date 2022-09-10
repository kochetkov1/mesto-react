import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen({ isEditProfilePopupOpen: !isEditProfilePopupOpen });
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen({ isAddPlacePopupOpen: !isAddPlacePopupOpen });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen({ isEditAvatarPopupOpen: !isEditAvatarPopupOpen });
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="App">

      <div className="page">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          title={'Редактировать профиль'}
          name={'profile'}
          buttonText={'Сохранить'}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input type="text" className="popup__input popup__input-name" id="name-input" name="name" placeholder="Имя" required
                minLength="2" maxLength="40" />
              <span className="name-input-error popup__input-error"></span>
              <input type="text" className="popup__input popup__input-description" id="description-input" name="description"
                placeholder="Описание профиля" required minLength="2" maxLength="200" />
              <span className="description-input-error popup__input-error"></span>
            </>
          }

        />

        <PopupWithForm
          title={'Новое место'}
          name={'card'}
          buttonText={'Cоздать'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input type="text" className="popup__input popup__input-name" id="name-card-input" name="name"
                placeholder="Название" required minLength="2" maxLength="30" />
              <span className="name-card-input-error popup__input-error"></span>
              <input type="url" className="popup__input popup__input-description" id="url-card-input" name="link"
                placeholder="Ссылка" required />
              <span className="url-card-input-error popup__input-error"></span>
            </>
          }
        />

        <PopupWithForm
          title={'Обновить аватар'}
          name={'avatar'}
          buttonText={'Сохранить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input type="url" className="popup__input popup__input-avatar" id="url-avatar-input" name="link"
                placeholder="Ссылка" required />
              <span className="url-avatar-input-error popup__input-error"></span>
            </>
          }
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </div>

    </div>
  );
}

export default App;