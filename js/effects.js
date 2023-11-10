import { pictureUploadPreview } from './scale.js';
import { EFFECTS, CURRENT_EFFECT, SLIDER_DEFAULT_MAX, SLIDER_DEFAULT_MIN, SLIDER_DEFAULT_STEP } from './constants.js';

const effectsList = document.querySelector('.effects__list');
const effectIntensityContainer = document.querySelector('.img-upload__effect-level');
const effectIntensityValue = document.querySelector('.effect-level__value');
const effectSlider = document.querySelector('.effect-level__slider');

noUiSlider.create(effectSlider, {
  range: {
    min: SLIDER_DEFAULT_MIN,
    max: SLIDER_DEFAULT_MAX,
  },
  start: SLIDER_DEFAULT_MAX,
  step: SLIDER_DEFAULT_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const resetToDefault = () => {
  effectIntensityContainer.classList.add('hidden');
  pictureUploadPreview.style.filter = '';
  effectIntensityValue.value = SLIDER_DEFAULT_MAX;
};

const setEffect = () => {
  effectIntensityValue.value = effectSlider.noUiSlider.get();
  pictureUploadPreview.style.filter = `${CURRENT_EFFECT.filter}(${effectIntensityValue.value}${CURRENT_EFFECT.unit})`;
};

effectsList.addEventListener('change', (evt) => {
  const effectInput = evt.target.closest('.effects__radio');
  if (effectInput) {
    if (effectInput.value === 'none') {
      resetToDefault();
    } else {
      effectIntensityContainer.classList.remove('hidden');
      for (const effect in EFFECTS) {
        if (effect === effectInput.value) {
          CURRENT_EFFECT.filter = EFFECTS[effect].filter;
          CURRENT_EFFECT.unit = EFFECTS[effect].unit;
          effectSlider.noUiSlider.updateOptions({
            range: {
              min: EFFECTS[effect].min,
              max: EFFECTS[effect].max,
            },
            start: EFFECTS[effect].max,
            step: EFFECTS[effect].step,
          });
        }
      }
    }
  }
});

effectSlider.noUiSlider.on('update', setEffect);

export { resetToDefault };
