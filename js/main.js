import './utils.js';
import './modal-window.js';
import './validation.js';
import './scale.js';
import './effects.js';
import { getPicturePreview } from './previews.js';
import { getData } from './api.js';
import { setFormSubmit, closeImageUploadForm } from './form.js';
import { ErrorText } from './constants';
import { showErrorMessage } from './status-messages.js';

getData()
  .then((pictures) => {
    getPicturePreview(pictures);
  })
  .catch(() => {
    showErrorMessage();
    throw new Error(ErrorText.GET_DATA);
  });

setFormSubmit(closeImageUploadForm);
