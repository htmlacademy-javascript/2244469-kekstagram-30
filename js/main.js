import { getPicturePreview } from './previews.js';
import { getData } from './api.js';
import { setFormSubmit, closeImageUploadForm } from './form.js';
import { showErrorMessage } from './status-messages.js';
import { setPicturesFilter } from './image-filters.js';

getData().then((picturesArray) => {
  getPicturePreview(picturesArray);
  setPicturesFilter(picturesArray);
}).catch(() => showErrorMessage());

setFormSubmit(closeImageUploadForm);
