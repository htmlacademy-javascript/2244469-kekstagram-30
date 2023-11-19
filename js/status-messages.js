import { isEscKey } from './utils.js';
import { onFormEscKeydown } from './form.js';
import { TIMEOUT } from './constants.js';

const uploadErrorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadErrorMessageElement = uploadErrorMessageTemplate.cloneNode('true');
const uploadErrorMessageText = uploadErrorMessageTemplate.querySelector('.error__title');

const uploadSuccessMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const uploadSuccessMessageElement = uploadSuccessMessageTemplate.cloneNode('true');
const uploadSuccessMessageText = uploadSuccessMessageTemplate.querySelector('.success__title');

const dataDownloadErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const dataDownloadErrorElement = dataDownloadErrorTemplate.cloneNode('true');
const dataDownloadErrorMessage = dataDownloadErrorTemplate.querySelector('.data-error__title');


const removeErrorMessage = () => document.body.remove(dataDownloadErrorElement);

const closeErrorMessage = () => setTimeout(removeErrorMessage, TIMEOUT);

const showErrorMessage = (message) => {
  document.body.appendChild(dataDownloadErrorElement);
  dataDownloadErrorMessage.textContent = message;
  closeErrorMessage();
};

const hideMessage = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', onFormEscKeydown);
  const existingMessageElement = document.querySelector('.success') || document.querySelector('.error');
  existingMessageElement.remove();
};

const onSuccessButtonClick = () => {
  hideMessage();
  document.removeEventListener('keydown', onFormEscKeydown);
};

const showSuccessMessage = (message) => {
  document.body.appendChild(uploadSuccessMessageElement);
  uploadSuccessMessageText.textContent = message;
  document.addEventListener('keydown', onDocumentKeydown);
};

const onErrorButtonClick = () => hideMessage();

const showUploadErrorMessage = (message) => {
  document.body.appendChild(uploadErrorMessageElement);
  uploadErrorMessageText.textContent = message;
  document.removeEventListener('keydown', onFormEscKeydown);
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadSuccessMessageElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('success__button') || evt.target.classList.contains('success')) {
    onSuccessButtonClick();
  }
});

uploadErrorMessageElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('error__button') || evt.target.classList.contains('error')) {
    onErrorButtonClick();
  }
});

function onDocumentKeydown(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

export { showErrorMessage, showUploadErrorMessage, showSuccessMessage };
