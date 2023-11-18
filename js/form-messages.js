import { isEscKey } from './utils.js';
import { onFormEscKeydown } from './form.js';

const uploadErrorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadErrorMessageElement = uploadErrorMessageTemplate.cloneNode('true');
const uploadErrorMessageText = uploadErrorMessageTemplate.querySelector('.error__title');

const uploadSuccessMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const uploadSuccessMessageElement = uploadSuccessMessageTemplate.cloneNode('true');
const uploadSuccessMessageText = uploadSuccessMessageTemplate.querySelector('.success__title');

const hideMessage = () => {
  const existingMessageElement = document.querySelector('.success') || document.querySelector('.error');
  existingMessageElement.remove();
};

const onSuccessButtonClick = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  hideMessage();
};

const showSuccessMessage = (message) => {
  document.body.appendChild(uploadSuccessMessageElement);
  uploadSuccessMessageText.textContent = message;
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadSuccessMessageElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('success__button') || evt.target.classList.contains('success')) {
    onSuccessButtonClick();
  }
});

const onErrorButtonClick = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onFormEscKeydown);
  hideMessage();
};

const showUploadErrorMessage = (message) => {
  document.body.appendChild(uploadErrorMessageElement);
  uploadErrorMessageText.textContent = message;
  document.removeEventListener('keydown', onFormEscKeydown);
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadErrorMessageElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('error__button') || evt.target.classList.contains('error')) {
    onErrorButtonClick();
  }
});

function onDocumentKeydown(evt) {
  evt.preventDefault();
  if (isEscKey(evt)) {
    onSuccessButtonClick();
    onErrorButtonClick();
  }
}

export { showUploadErrorMessage, showSuccessMessage };
