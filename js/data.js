import {getRandomInteger, getUniqueRandomInteger } from './utils.js';
import {
  PHOTOS_COUNT,
  DESCRIPTIONS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  MAX_POSTED_COMMENTS,
  AVATARS_COUNT,
  MESSAGES,
  NAMES
} from './constants.js';

const getPhotoId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getImageId = getUniqueRandomInteger(1, PHOTOS_COUNT);
const getCommentID = getUniqueRandomInteger(0, MAX_POSTED_COMMENTS);

const getComment = () => ({
  id: getCommentID(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const getComments = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(getComment());
  }
  return arr;
};

const getPhoto = () => ({
  id: getPhotoId(),
  url: `photos/${getImageId()}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)),
});

const getPhotos = (n) => {
  const photos = [];
  for (let i = 0; i < n; i++) {
    photos.push(getPhoto());
  }
  return photos;
};

export { getPhotos };
