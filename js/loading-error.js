const dataDownloadErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const dataDownloadErrorElement = dataDownloadErrorTemplate.cloneNode('true');
const dataDownloadErrorMessage = dataDownloadErrorTemplate.querySelector('.data-error__title');
document.body.appendChild(dataDownloadErrorElement);
dataDownloadErrorElement.classList.add('hidden');

const hideErrorMessage = () => dataDownloadErrorElement.classList.add('hidden');

const closeErrorMessage = () => setTimeout(hideErrorMessage, 5000);

const showErrorMessage = (message) => {
  dataDownloadErrorElement.classList.remove('hidden');
  dataDownloadErrorMessage.textContent = message;
  closeErrorMessage();
};

export { showErrorMessage };
