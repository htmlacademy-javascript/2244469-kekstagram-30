const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('ghjhfj', 20);

//console.log(checkStringLength('lllll', 6));


const checkIfPalindrome = (string) => {
  //console.log(string);
  const newString = string.replaceAll(' ', '').toLowerCase();
  //console.log(newString);
  let reverseString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reverseString += newString[i];

    //console.log(reverseString);
  }
  //console.log(newString);
  return newString === reverseString;
};

checkIfPalindrome('Лёша на полке клопа нашёл ');

//console.log(checkIfPalindrome('Лёша на полке клопа нашёл '));


const getNumbers = (value) => {
  value = value.toString();
  //console.log(value);
  let resultString = '';
  for (let i = 0; i <= value.length - 1; i++) {
    if (!Number.isNaN(parseInt(value[i], 10))) {
      resultString += parseInt(value[i], 10);
      //console.log(resultString);
    }
  }
  return resultString;
};

getNumbers('ghjghjg 78569hgg jgh43 kgj33455');

//console.log(getNumbers('ghjghjg 78569hgg jgh43 kgj33455'));
