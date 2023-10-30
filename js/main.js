import './utils.js';
import { getPhotos } from './data.js';
import { PHOTOS_COUNT } from './constants.js';
import { getPicturesPreview } from './previews.js';


const picturesPreview = getPhotos(PHOTOS_COUNT);
getPicturesPreview(picturesPreview);
