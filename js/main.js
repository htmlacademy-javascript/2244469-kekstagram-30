import './utils.js';
import './modal-window.js';
import './validation.js';
import './scale.js';
import './effects.js';
import './image-filters.js';
import { getPicturePreview } from './previews.js';
import { getData } from './api.js';
import { setFormSubmit, closeImageUploadForm } from './form.js';
import { ErrorText } from './constants';
import { showErrorMessage } from './status-messages.js';
import { setPicturesFilter } from './image-filters.js';

try {
  const picturesArray = await getData();
  getPicturePreview(picturesArray);
  setPicturesFilter(picturesArray);
} catch {
  showErrorMessage();
  throw new Error(ErrorText.GET);
}

setFormSubmit(closeImageUploadForm);
