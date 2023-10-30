import './utils.js';
import './modal-window.js';
import { getPhotos } from './data.js';
import { PHOTOS_COUNT } from './constants.js';
import { getPicturePreview } from './previews.js';


const picturePreview = getPhotos(PHOTOS_COUNT);
getPicturePreview(picturePreview);
