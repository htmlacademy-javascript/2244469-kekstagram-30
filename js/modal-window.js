import './previews.js';
import { picturesList } from './previews.js';

const modalWindow = document.querySelector('.big-picture');
const modalCloseButton = modalWindow.querySelector('.cancel');

picturesList.addEventListener('click', (evt) => {
  if (evt.target.closest('a')) {
    evt.preventDefault();
    modalWindow.classList.remove('hidden');
  }
});

modalCloseButton.addEventListener('click', () => modalWindow.classList.add('hidden'));

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalWindow.classList.add('hidden');
  }
});
