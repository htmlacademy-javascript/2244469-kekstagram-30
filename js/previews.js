import './modal-window.js';
import { openModalWindow } from './modal-window.js';

const picturesList = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesListFragment = document.createDocumentFragment();

const removePictures = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};

const setListener = (picturesArray) => {
  picturesList.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      const id = parseInt((evt.target.closest('.picture').dataset.id), 10);
      const picture = picturesArray.find((item) => item.id === id);
      evt.preventDefault();
      openModalWindow(picture);
    }
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

export { getPicturePreview, picturesList, pictureTemplate, removePictures };
