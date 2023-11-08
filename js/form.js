import { isEscKey } from './utils.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadContainer = document.querySelector('.img-upload__overlay');
const imageUploadInput = document.querySelector('.img-upload__input');
const imageUploadCloseButton = imageUploadForm.querySelector('.cancel');
const userHashtagInput = imageUploadContainer.querySelector('.text__hashtags');
const userDescriptionInput = imageUploadContainer.querySelector('.text__description');
const submitButton = imageUploadContainer.querySelector('.img-upload__submit');

imageUploadContainer.classList.remove('hidden'); // remove later, necessary just for now

imageUploadInput.addEventListener('change', () => {
  imageUploadContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}); // преобоазовать согласно критерию д4

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
}
);

const closeImageUploadForm = () => {
  imageUploadForm.reset();
  pristine.reset();
  imageUploadContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

imageUploadCloseButton.addEventListener('click', () => closeImageUploadForm()); // тоже проверить на соотв д4

function onDocumentKeydown(evt) {
  if (isEscKey(evt) && evt.target !== userHashtagInput && evt.target !== userDescriptionInput) {
    closeImageUploadForm();
  }
}

imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

imageUploadForm.addEventListener('reset', () => {
  closeImageUploadForm();
  pristine.reset();
});

export { imageUploadForm, submitButton, userHashtagInput, userDescriptionInput, pristine };
