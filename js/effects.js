// По умолчанию должен быть выбран эффект «Оригинал».
// На изображение может накладываться только один эффект.
// Интенсивность эффекта регулируется перемещением ползунка в слайдере.
// Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider.
// Уровень эффекта записывается в поле .effect-level__value в виде числа.
// При изменении уровня интенсивности эффекта (предоставляется API слайдера),
// CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
// Для эффекта «Оригинал» CSS-стили filter удаляются.
// При выборе эффекта «Оригинал» слайдер и его контейнер (элемент .img-upload__effect-level) скрываются.
// При переключении эффектов, уровень насыщенности сбрасывается до
// начального значения (100%): слайдер, CSS-стиль изображения и значение поля должны обновляться.

import { pictureUploadPreview } from './scale.js';

// const EFFECTS = {
//   default: {
//     filter: '',
//     unit: ''
//   },
//   chrome: {
//     filter: 'grayscale',
//     min: 0,
//     max: 1,
//     step: 0.1
//   },
//   sepia: {
//     filter: 'sepia',
//     min: 0,
//     max: 1,
//     step: 0.1
//   },
//   marvin: {
//     filter: 'invert',
//     unit: '%',
//     min: 0,
//     max: 100,
//     step: 1
//   },
//   phobos: {
//     filter: 'blur',
//     unit: 'px',
//     min: 0,
//     max: 3,
//     step: 0.1
//   },
//   heat: {
//     filter: 'brightness',
//     min: 1,
//     max: 3,
//     step: 0.1
//   }
// };

const effectSlider = document.querySelector('.effect-level__slider');
const effectIntensityValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');

const CURRENT_EFFECT = {
  filter: '',
  unit: ''
};
const DEFAULT_EFFECT_INTENSITY = 100;

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
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

const resetEffect = () => {
  effectLevelContainer.classList.add('hidden');
  pictureUploadPreview.style.filter = '';
};

const setEffectValue = () => {
  effectIntensityValue.value = effectSlider.noUiSlider.get();
  pictureUploadPreview.style.filter = `${CURRENT_EFFECT.filter}(${effectIntensityValue.value}${CURRENT_EFFECT.unit})`;
};

// const applyEffect = ({ min, max, step, filter, unit = '' }) => {
//   effectSlider.noUiSlider.updateOptions({
//     range: { min, max },
//     start: max,
//     step
//   });
//   pictureUploadPreview.style.filter = `${filter}(${max}${unit})`;
// };

// effectsList.addEventListener('change', (evt) => {
//   const effectInput = evt.target.closest('.effects__radio');
//   if (effectInput) {
//     for (const effect of EFFECTS) {
//       if (effect === effectInput.value) {
//         applyEffect(EFFECTS[effect]);
//       }
//     }
//   }
// });


effectsList.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelContainer.classList.remove('hidden');
    pictureUploadPreview.removeAttribute('style');
    pictureUploadPreview.removeAttribute('class');
    effectIntensityValue.value = DEFAULT_EFFECT_INTENSITY;
    pictureUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
  }
  if (evt.target.value === 'none') {
    resetEffect();
  }
  if (evt.target) {}
});

effectSlider.noUiSlider.on('update', () => {
  effectIntensityValue.value = effectSlider.noUiSlider.get();
});


// effectOption.addEventListener('change', (evt) => {
//   if (evt.target.checked === effects.CHROME) {
//     effectSlider.noUiSlider.updateOptions({
//       range: {
//         max: 1
//       },
//       start: 1,
//       step: 0.1
//     });
//   }
// });

// effectOption.addEventListener('change', (evt) => {
//   evt.target.value =
//   pictureUploadPreview.style.filter = 'grayscale(1)';
// });
