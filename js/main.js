import './utils.js';
import './modal-window.js';
import './validation.js';
import './scale.js';
import './effects.js';
// import { PHOTOS_COUNT } from './constants.js';
// import { getPhotos } from './data.js';
import { getPicturePreview } from './previews.js';
import { getData } from './api.js';
import { setFormSubmit, closeImageUploadForm } from './form.js';

getData()
  .then((pictures) => {
    getPicturePreview(pictures);
  });

setFormSubmit(closeImageUploadForm);
