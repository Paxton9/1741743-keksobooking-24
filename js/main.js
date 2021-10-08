//  Первая функция , радномное целое число.

const AVATAR_RANDOM_INT = _.shuffle(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']);

const AD_TITLES = ['Проведите лучшую ночь в своей жизни , в компании друзей', 'Получите незабываемые впечатления', 'Удовольствие гарантировано', 'Каждый должен здесь побывать', 'Здесь вам рады', 'Почувствуйте себя царями', 'Здесь бывали Президенты'];

const HOUSE_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_INS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECK_OUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const SERVICES = _.shuffle(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']);

const COMPILATION_COUNT = 10;

const SYMBOLS_COUNT = 5;

const ROOM_INFOS = ['Помещение чистое , ухоженное , солнечная сторона.', 'Хороший , уютный дом', 'Прекрасная квартирка', 'Оборудованное помешение для комфортного жилья', 'Замечательное место , торговые центры в шаговой доступности', 'Новый Hitech ремонт и просторные комнаты',]

const PHOTOS = _.shuffle([
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
]);

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const createAd = () => {
  const randomLong = _.random(35.65000, 35.70000).toFixed(SYMBOLS_COUNT);
  const randomLat = _.random(139.70000, 139.80000).toFixed(SYMBOLS_COUNT);
  return {
    author: {
      avatar: 'img/avatars/user' + AVATAR_RANDOM_INT.shift() + '.png'},
    offer: {
      title: getRandomArrayElement(AD_TITLES),
      address:  randomLong + ' ' + randomLat,
      price: [_.random(60, 830)],
      type: getRandomArrayElement(HOUSE_TYPES),
      rooms: [_.random(2, 8)],
      guests: [_.random(2, 12)],
      checkin: getRandomArrayElement(CHECK_INS),
      checkout: getRandomArrayElement(CHECK_OUTS),
      features: SERVICES.slice( _.random(0 , 3) ,  _.random(2 , 6)),
      description: getRandomArrayElement(ROOM_INFOS),
      photos: PHOTOS.slice(0, _.random(1 , 3)),
    },
    location: {
      lat: randomLong,
      lng: randomLat,
    },
  };
};

const ANNOUNCEMENTS = Array.from({length: COMPILATION_COUNT}, createAd);
console.log(ANNOUNCEMENTS);
