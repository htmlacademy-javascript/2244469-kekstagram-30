import './modal-window.js';
import { openModalWindow } from './modal-window.js';

//Список фото, сюда добавляем
const picturesList = document.querySelector('.pictures');

//Шаблон для добавления фото
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

//documentFragment
const picturesListFragment = document.createDocumentFragment();

//Удаление фото
const removePictures = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

const getPicturePreview = (picturesArray) => {
  picturesArray.forEach(({ id, url, description, likes, comments }) => {
    removePictures();
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.dataset.id = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(pictureElement);
  });
  picturesList.appendChild(picturesListFragment);
  setListener(picturesArray);
};


function setListener (picturesArray) {
  picturesList.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      const id = parseInt((evt.target.closest('.picture').dataset.id), 10);
      const picture = picturesArray.find((item) => item.id === id);
      evt.preventDefault();
      openModalWindow(picture);
    }
  });
}

export { getPicturePreview, picturesList, pictureTemplate, removePictures };
