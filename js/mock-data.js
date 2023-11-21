// const PHOTOS_COUNT = 25;
// const MIN_LIKES = 15;
// const MAX_LIKES = 200;
// const MIN_COMMENTS = 0;
// const MAX_COMMENTS = 30;
// const MAX_POSTED_COMMENTS = 200;
// const AVATARS_COUNT = 6;
// const DESCRIPTIONS = [
//   'Мороз и солнце; день чудесный!',
//   'Еще ты дремлешь, друг прелестный',
//   'Пора, красавица, проснись: Открой сомкнуты негой взоры',
//   'Навстречу северной Авроры',
//   'Звездою севера явись!',
//   'Скользя по утреннему снегу',
//   'Друг милый, предадимся бегу нетерпеливого коня',
//   'И навестим поля пустые, леса, недавно столь густые',
//   'И берег, милый для меня.'
// ];
// const MESSAGES = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают.',
//   'Как можно было поймать такой неудачный момент?!',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
// ];
// const NAMES = [
//   'Elizabeth',
//   'Alex',
//   'Артем',
//   'Аленка',
//   'Дзера',
//   'Julia',
//   'Uchiyama',
//   'Carl'
// ];

// const getComment = () => ({
//   id: getCommentID(),
//   avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
//   message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
//   name: NAMES[getRandomInteger(0, NAMES.length - 1)],
//   message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
// });

// const getComments = (n) => {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(getComment());
//   }
//   return arr;
// };

// const getPhoto = () => ({
//   id: getPhotoId(),
//   url: `photos/${getImageId()}.jpg`,
//   description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
//   likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
//   comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
// });

// const getPhotos = (n) => {
//   const photos = [];
//   for (let i = 0; i < n; i++) {
//     photos.push(getPhoto());
//   }
//   return photos;
// };

// getPicturePreview(getPhotos(PHOTOS_COUNT));


// import {getRandomInteger, getUniqueRandomInteger } from './utils.js';
// import {
//   PHOTOS_COUNT,
//   DESCRIPTIONS,
//   MIN_LIKES,
//   MAX_LIKES,
//   MIN_COMMENTS,
//   MAX_COMMENTS,
//   MAX_POSTED_COMMENTS,
//   AVATARS_COUNT,
//   MESSAGES,
//   NAMES
// } from './constants.js';

// const getPhotoId = getUniqueRandomInteger(1, PHOTOS_COUNT);
// const getImageId = getUniqueRandomInteger(1, PHOTOS_COUNT);
// const getCommentID = getUniqueRandomInteger(0, MAX_POSTED_COMMENTS);

// const getComment = () => ({
//   id: getCommentID(),
//   avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
//   name: NAMES[getRandomInteger(0, NAMES.length - 1)],
//   message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
// });

// const getComments = (n) => {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(getComment());
//   }
//   return arr;
// };

// const getPhoto = () => ({
//   id: getPhotoId(),
//   url: `photos/${getImageId()}.jpg`,
//   description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
//   likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
//   comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
// });

// const getPhotos = (n) => {
//   const photos = [];
//   for (let i = 0; i < n; i++) {
//     photos.push(getPhoto());
//   }
//   return photos;
// };

// export { getPhotos, getImageId, getPhotoId, getComments, getUniqueRandomInteger };
