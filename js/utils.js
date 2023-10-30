const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// const getUniqueRandomInteger = (min, max) => {
//   const arr = [];
//   return function () {
//     let flag = true;
//     let randomInteger;
//     if (arr.length >= (max - min + 1)) {
//       console.error('Перебрали все числа из диапазона от ' + min + ' до ' + max);
//       return null;
//     }
//     while (flag) {
//       randomInteger = getRandomInteger(min, max);
//       if (!arr.includes(randomInteger)) {
//         arr.push(randomInteger);
//         flag = false;
//       }
//     }
//     return randomInteger;
//   };
// };

const getUniqueRandomInteger = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // eslint-disable-next-line no-console
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export { getRandomInteger, getUniqueRandomInteger };


