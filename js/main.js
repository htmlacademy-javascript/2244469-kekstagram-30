import './utils.js';
import './modal-window.js';
import './form.js';
import './validation.js';
import './scale.js';
import './effects.js';
import { PHOTOS_COUNT } from './constants.js';
import { getPhotos } from './data.js';
import { getPicturePreview } from './previews.js';


getPicturePreview(getPhotos(PHOTOS_COUNT));
