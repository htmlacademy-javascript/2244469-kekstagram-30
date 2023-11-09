import { imageUploadForm } from './form.js';
import { SCALE_MIN, SCALE_MAX, SCALE_STEP } from './constants.js';

const scaleButtonMinus = imageUploadForm.querySelector('.scale__control--smaller');
const scaleButtonPlus = imageUploadForm.querySelector('.scale__control--bigger');
const scaleInputValue = imageUploadForm.querySelector('.scale__control--value');
const pictureUploadPreview = imageUploadForm.querySelector('.img-upload__preview');
let scaleCurrent = 100;

scaleButtonMinus.addEventListener('click', () => {
  if (scaleCurrent > SCALE_MIN) {
    scaleCurrent = scaleCurrent - SCALE_STEP;
    scaleInputValue.value = `${scaleCurrent}%`;
    pictureUploadPreview.style.transform = 'scale(0.' + scaleCurrent + ')';
  }
});

scaleButtonPlus.addEventListener('click', () => {
  if (scaleCurrent < SCALE_MAX) {
    scaleCurrent = scaleCurrent + SCALE_STEP;
    scaleInputValue.value = `${scaleCurrent}%`;
    if (scaleCurrent === SCALE_MAX) {
      pictureUploadPreview.style.transform = 'scale(1)';
    } else {
      pictureUploadPreview.style.transform = 'scale(0.' + scaleCurrent + ')';
    }
  }
});
