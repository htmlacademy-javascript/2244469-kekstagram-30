import './previews.js';
// import { MAX_POSTED_COMMENTS } from './constants.js';
import { picturesList } from './previews.js';
import { isEscKey } from './utils.js';
// import { getUniqueRandomInteger, getComments } from './data.js';

const modalWindow = document.querySelector('.big-picture');
const modalCloseButton = modalWindow.querySelector('.cancel');

// const commentsCount = modalWindow.querySelector('.social__comment-count');
// const commentsLoader = modalWindow.querySelector('.comments-loader');

const fullPictureImage = modalWindow.querySelector('.big-picture__img').querySelector('img'); //Image itself
const fullPictureCaption = modalWindow.querySelector('.social__caption'); //Pic name
const fullPictureLikesCount = modalWindow.querySelector('.likes-count');
// const socialAvatarImage = modalWindow.querySelector('.social__picture');
// const socialCommentText = modalWindow.querySelector('.social__text');
const socialCommentsShown = modalWindow.querySelector('.social__comment-shown-count');
const socialCommentsTotal = modalWindow.querySelector('.social__comment-total-count');
const commentsList = modalWindow.querySelector('.social__comments'); //Put comments here
// const commentsItemTemplate = commentsList.querySelector('li');

const onDocumentKeydown = (evt) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeModalWindow();
  }
};

const openModalWindow = () => {
  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModalWindow = () => {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

modalCloseButton.addEventListener('click', () => closeModalWindow());

const getFullPicture = () => {
  picturesList.addEventListener('click', (evt) => {
    if (evt.target.closest('a')) {
      evt.preventDefault();
      openModalWindow();
      const picture = evt.target.parentElement;
      fullPictureImage.src = picture.url;
      fullPictureImage.alt = picture.description;
      fullPictureCaption.textContent = picture.description;
      fullPictureLikesCount.textContent = picture.likes;
      socialCommentsTotal.textContent = picture.comments.length;
      socialCommentsShown.textContent = picture.comments.length;
    }
  });
  return getFullPicture;
};

getFullPicture();


// <!-- Комментарии к изображению -->
// <div class="social__comment-count"><span class="social__comment-shown-count">5</span> из <span class="social__comment-total-count">125</span> комментариев</div>
// <ul class="social__comments">
//   <li class="social__comment">
//     <img class="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35">
//     <p class="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
//   </li>
//   <li class="social__comment">
//     <img class="social__picture" src="img/avatar-3.svg" alt="Аватар комментатора фотографии" width="35" height="35">
//      <p class="social__text">Да это фоташоп!!!!!!!!</p>
//   </li>
// </ul>

/* <li class="social__comment">
  <img
    class="social__picture"
    src="{{аватар}}"
    alt="{{имя комментатора}}"
    width="35" height="35">
  <p class="social__text">{{текст комментария}}</p>
</li> */
