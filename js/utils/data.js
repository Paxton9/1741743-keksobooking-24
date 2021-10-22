const randomInts = _.shuffle(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']);


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

const SERVICES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


const COMPILATION_COUNT = 10;

const SYMBOLS_COUNT = 5;

const BEGIN_LAT = 35.65000;
const END_LAT = 35.70000;
const BEGIN_LONG = 139.70000;
const END_LONG = 139.80000;

const ROOM_INFOS = ['Помещение чистое , ухоженное , солнечная сторона.', 'Хороший , уютный дом', 'Прекрасная квартирка', 'Оборудованное помешение для комфортного жилья', 'Замечательное место , торговые центры в шаговой доступности', 'Новый Hitech ремонт и просторные комнаты'];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const createAd = () => {
  const randomLat = _.random(BEGIN_LAT, END_LAT).toFixed(SYMBOLS_COUNT);
  const randomLong = _.random(BEGIN_LONG, END_LONG).toFixed(SYMBOLS_COUNT);
  return {
    author: {
      avatar: `img/avatars/user${randomInts.shift()}.png`},
    offer: {
      title: _.sample(AD_TITLES),
      address:  `${randomLat}, ${randomLong}`,
      price: _.random(3500, 76000),
      type: _.sample(HOUSE_TYPES),
      rooms: _.random(2, 8),
      guests: _.random(2, 12),
      checkin: _.sample(CHECK_INS),
      checkout: _.sample(CHECK_OUTS),
      features: _.sampleSize(SERVICES, _.random(0 , SERVICES.length)),
      description: _.sample(ROOM_INFOS),
      photos: _.sampleSize(PHOTOS, _.random(0 , PHOTOS.length)),
    },
    location: {
      lat: randomLat,
      lng: randomLong,
    },
  };
};
const announcements = Array.from({length: COMPILATION_COUNT}, createAd);

export {announcements};


