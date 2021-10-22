
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

const popupCard = popupTemplate.cloneNode(true);
const popupFragment = document.createDocumentFragment();
const mapCanvas = document.querySelector('#map-canvas');

const renderFeatures = (offer) => {
  const featuresContainer = popupCard.querySelector('.popup__features');
  featuresContainer.innerHTML = '';
  offer.features.forEach((userFeature) => {
    const featuresListItem = document.createElement('li');
    featuresListItem.classList.add('popup__feature');
    featuresListItem.classList.add(`popup__feature--${userFeature}`);
    featuresContainer.appendChild(featuresListItem);
  });
  const popupPhotoContainer = popupCard.querySelector('.popup__photos');
  popupPhotoContainer.innerHTML = '';
  offer.photos.forEach((photo) => {
    const popupImg = document.createElement('img');
    popupImg.classList.add('popup__photo');
    popupImg.width = 45;
    popupImg.height = 40;
    popupImg.src = photo;
    popupPhotoContainer.appendChild(popupImg);
  });
};


const renderCards = (offers) => {
  offers.forEach(({author, offer}) => {
    popupCard.querySelector('.popup__title').textContent = offer.title;
    popupCard.querySelector('.popup__text--address').textContent = offer.address;
    popupCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    popupCard.querySelector('.popup__type').textContent = offer.type;
    popupCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    popupCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    popupCard.querySelector('.popup__description').textContent = offer.description;
    popupCard.querySelector('.popup__avatar').src = author.avatar;
    renderFeatures(offer);
    popupFragment.appendChild(popupCard);
  });
  mapCanvas.appendChild(popupFragment);
};


export {renderCards};

