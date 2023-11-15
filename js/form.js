import { isEscKey } from './utils.js';
import { resetScale } from './scale.js';
import { resetToDefault } from './effects.js';
import { isValid, resetValidation } from './validation.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUploadContainer = imageUploadForm.querySelector('.img-upload__overlay');
const imageUploadInput = imageUploadForm.querySelector('.img-upload__input');
const imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
const imageUploadCloseButton = imageUploadForm.querySelector('.cancel');
const userHashtagInput = imageUploadContainer.querySelector('.text__hashtags');
const userDescriptionInput = imageUploadContainer.querySelector('.text__description');
const submitButton = imageUploadForm.querySelector('.img-upload__submit');

const effectsPreviewImages = imageUploadForm.querySelectorAll('.effects__preview');

const renderUploadImage = () => {
  const imageUploadFile = imageUploadInput.files[0];
  imageUploadPreview.src = URL.createObjectURL(imageUploadFile);

  effectsPreviewImages.forEach((image) => {
    image.style.backgroundImage = `url(${imageUploadPreview.src})`;
  });
};

imageUploadInput.addEventListener('change', () => {
  resetToDefault();
  renderUploadImage();
  imageUploadContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

const closeImageUploadForm = () => {
  imageUploadForm.reset();
  resetValidation();
  resetScale();
  imageUploadContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

imageUploadCloseButton.addEventListener('click', closeImageUploadForm());

imageUploadForm.addEventListener('submit', (evt) => {
  if (!isValid) {
    evt.preventDefault();
  }
});

imageUploadForm.addEventListener('reset', () => {
  closeImageUploadForm();
  resetValidation();
});

function onDocumentKeydown(evt) {
  if (isEscKey(evt) && evt.target !== userHashtagInput && evt.target !== userDescriptionInput) {
    closeImageUploadForm();
  }
}

export { submitButton };
