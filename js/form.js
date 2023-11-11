import { isEscKey } from './utils.js';
import { resetScale } from './scale.js';
import { resetToDefault } from './effects.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadContainer = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadInput = imageUploadForm.querySelector('.img-upload__input');
const imageUploadCloseButton = imageUploadForm.querySelector('.cancel');
const userHashtagInput = imageUploadContainer.querySelector('.text__hashtags');
const userDescriptionInput = imageUploadContainer.querySelector('.text__description');
const submitButton = imageUploadContainer.querySelector('.img-upload__submit');

imageUploadInput.addEventListener('change', () => {
  resetToDefault();
  imageUploadContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
}
);

const closeImageUploadForm = () => {
  imageUploadForm.reset();
  resetScale();
  pristine.reset();
  imageUploadContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

imageUploadCloseButton.addEventListener('click', closeImageUploadForm());

imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

imageUploadForm.addEventListener('reset', () => {
  closeImageUploadForm();
  pristine.reset();
});

function onDocumentKeydown(evt) {
  if (isEscKey(evt) && evt.target !== userHashtagInput && evt.target !== userDescriptionInput) {
    closeImageUploadForm();
  }
}

export { submitButton, userHashtagInput, userDescriptionInput, pristine };
