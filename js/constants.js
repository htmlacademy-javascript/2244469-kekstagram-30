const BASE_URL = 'https://30.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные с сервера',
  SEND_DATA: 'Не удалось отправить форму',
};

const TIMEOUT = 5000;

const SubmitButtonStatus = {
  SENDING: 'Публикую...',
  IDLE: 'Опубликовать',
};

const PHOTOS_COUNT = 25;
const DESCRIPTIONS = [
  'Мороз и солнце; день чудесный!',
  'Еще ты дремлешь, друг прелестный',
  'Пора, красавица, проснись: Открой сомкнуты негой взоры',
  'Навстречу северной Авроры',
  'Звездою севера явись!',
  'Скользя по утреннему снегу',
  'Друг милый, предадимся бегу нетерпеливого коня',
  'И навестим поля пустые, леса, недавно столь густые',
  'И берег, милый для меня.'
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const COMMENTS_TO_LOAD = 5;
const MAX_POSTED_COMMENTS = 200;
const AVATARS_COUNT = 6;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];
const NAMES = [
  'Elizabeth',
  'Alex',
  'Артем',
  'Аленка',
  'Дзера',
  'Julia',
  'Uchiyama',
  'Carl'
];
const HASHTAGS_MAX_NUMBER = 5;
const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const DESCRIPTION_MAX_LENGTH = 140;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;
const SCALE_STEP = 25;

const EFFECTS = {
  default: {
    filter: 'none',
    unit: '',
  },
  chrome: {
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1
  },
  heat: {
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1
  }
};

const SLIDER_DEFAULT_MAX = 100;
const SLIDER_DEFAULT_MIN = 100;
const SLIDER_DEFAULT_STEP = 1;

export {
  BASE_URL,
  Route,
  ErrorText,
  TIMEOUT,
  SubmitButtonStatus,
  PHOTOS_COUNT,
  DESCRIPTIONS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS_TO_LOAD,
  MAX_POSTED_COMMENTS,
  AVATARS_COUNT,
  MESSAGES,
  NAMES,
  HASHTAGS_MAX_NUMBER,
  HASHTAG_REGEX,
  DESCRIPTION_MAX_LENGTH,
  SCALE_MIN,
  SCALE_MAX,
  SCALE_DEFAULT,
  SCALE_STEP,
  EFFECTS,
  SLIDER_DEFAULT_MAX,
  SLIDER_DEFAULT_MIN,
  SLIDER_DEFAULT_STEP
};
