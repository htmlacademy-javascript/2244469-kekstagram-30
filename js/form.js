import { isEscKey } from './utils.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadContainer = document.querySelector('.img-upload__overlay');
const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadCloseButton = imageUploadForm.querySelector('.cancel');
const userHashtagInput = imageUploadContainer.querySelector('.text__hashtags');
const userCommentInput = imageUploadContainer.querySelector('.text__description');

// const pristine = new Pristine(imageUploadForm);

imageUploadContainer.classList.remove('hidden'); // remove later, necessary just for now

imageUploadInput.addEventListener('change', () => {
  imageUploadContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

const closeImageUploadForm = () => {
  imageUploadForm.reset();
  imageUploadContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

imageUploadCloseButton.addEventListener('click', () => closeImageUploadForm());

function onDocumentKeydown(evt) {
  if (isEscKey(evt) && evt.target !== userHashtagInput && evt.target !== userCommentInput) {
    closeImageUploadForm();
  }
}
