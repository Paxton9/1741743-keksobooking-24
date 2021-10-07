//  Первая функция , радномное целое число.

const AUTHOR = {
  description: ['Доброжелательный , идущий на компромиссы, понимающий', 'Коммуникабельный человек', 'С хорошим чувством юмора', 'Отзывчивый'],
};

const AVATAR_RANDOM_INT = _.shuffle(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']);

const OFFER = {
  name: ['Алексей ', 'Александр ', 'Игорь ', 'Мария ', 'Елена ', 'Виктор ', 'Вероника '],
  lastname: ['Пончик. ', 'Сушко. ', 'Челябинц. ', 'Антонов. ', 'Мус. ', 'Зубр. ', 'Шмидт. '],
  description: ['Сдаю уютное гнёздышко под солнышком', 'Сдам хорошее помещения для коллективного отдыха', 'Сдам жилое помещение для молодой семьи', 'Сдаю офисное помещение', 'Сдаю помещение для работников', 'Сдам помещение для хорошего времяпровождения', 'Сдаю помещение , сауна входит в цену'],
};

const AD_TITLE = ['Проведите лучшую ночь в своей жизни , в компании друзей', 'Получите незабываемые впечатления', 'Удовольствие гарантировано', 'Каждый должен здесь побывать', 'Здесь вам рады', 'Почувствуйте себя царями', 'Здесь бывали Президенты'];

const HOUSE_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECK_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const SERVICES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const ROOM_INFO = ['Помещение чистое , ухоженное , солнечная сторона.', 'Хороший , уютный дом', 'Прекрасная квартирка', 'Оборудованное помешение для комфортного жилья', 'Замечательное место , торговые центры в шаговой доступности', 'Новый Hitech ремонт и просторные комнаты',]

const PHOTO = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const COMPILATION_COUNT = 10;

const SYMBOLS_COUNT = 5;

const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]);
createArr([...SERVICES], 5);

const newArrayServices = createArr([...SERVICES], 5);
const newArrayPhoto = createArr([...PHOTO], 3);

const createAnAd = () => {
  return {
    author: getRandomArrayElement(AUTHOR.description),
    avatar: 'img/avatars/user' + AVATAR_RANDOM_INT.shift() + '.png',
    offer: getRandomArrayElement(OFFER.name) + getRandomArrayElement(OFFER.lastname) + getRandomArrayElement(OFFER.description),
    title: getRandomArrayElement(AD_TITLE),
    address: 'Ширина ' + [_.random(35.65000, 35.70000).toFixed(5)] + ' Долгота ' + [_.random(139.70000, 139.80000).toFixed(5)],
    price: [_.random(60, 830) + ' Евро'],
    type: getRandomArrayElement(HOUSE_TYPE),
    rooms: [_.random(2, 8) + ' Комнат'],
    guests: [_.random(2, 12) + ' гостей'],
    checkin: getRandomArrayElement(CHECK_IN),
    checkout: getRandomArrayElement(CHECK_OUT),
    features: newArrayServices,
    description: getRandomArrayElement(ROOM_INFO),
    photos: newArrayPhoto,
    location: 'Ширина ' + [_.random(35.65000, 35.70000).toFixed(SYMBOLS_COUNT)] + ' Долгота ' + [_.random(139.70000, 139.80000).toFixed(SYMBOLS_COUNT)],
  };
};

createAnAd();

const createAnnouncement = Array.from({length: COMPILATION_COUNT}, createAnAd);
console.log(createAnnouncement);
