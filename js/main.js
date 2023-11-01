import './utils.js';
import './modal-window.js';
import { PHOTOS_COUNT } from './constants.js';
import { getPhotos } from './data.js';
import { getPicturePreview } from './previews.js';


getPicturePreview(getPhotos(PHOTOS_COUNT));
