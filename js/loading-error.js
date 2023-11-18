import { TIMEOUT } from './constants';

const dataDownloadErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const dataDownloadErrorElement = dataDownloadErrorTemplate.cloneNode('true');
const dataDownloadErrorMessage = dataDownloadErrorTemplate.querySelector('.data-error__title');

const removeErrorMessage = () => document.body.removeChild(dataDownloadErrorElement);

const closeErrorMessage = () => setTimeout(removeErrorMessage, TIMEOUT);

const showErrorMessage = (message) => {
  document.body.appendChild(dataDownloadErrorElement);
  dataDownloadErrorMessage.textContent = message;
  closeErrorMessage();
};

export { showErrorMessage };
