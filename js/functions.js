// const checkStringLength = (string, maxLength) => string.length <= maxLength;
// checkStringLength('ghjhfj', 20);

// //console.log(checkStringLength('lllll', 6));


// const checkIfPalindrome = (string) => {
//   //console.log(string);
//   const newString = string.replaceAll(' ', '').toLowerCase();
//   //console.log(newString);
//   let reverseString = '';
//   for (let i = newString.length - 1; i >= 0; i--) {
//     reverseString += newString[i];

//     //console.log(reverseString);
//   }
//   //console.log(newString);
//   return newString === reverseString;
// };

// checkIfPalindrome('Лёша на полке клопа нашёл ');
// checkIfPalindrome('топот');
// checkIfPalindrome('ДовОд');
// checkIfPalindrome('Кекс');

// //console.log(checkIfPalindrome('Лёша на полке клопа нашёл '));


// const getNumbers = (value) => {
//   value = value.toString();
//   //console.log(value);
//   let resultString = '';
//   for (let i = 0; i <= value.length - 1; i++) {
//     if (!Number.isNaN(parseInt(value[i], 10))) {
//       resultString += parseInt(value[i], 10);
//       //console.log(resultString);
//     }
//   }
//   return resultString;
// };

// getNumbers('ghjghjg 78569hgg jgh43 kgj33455');
// getNumbers('2023 год');
// getNumbers('ECMAScript 2022');
// getNumbers('1 кефир, 0.5 батона');
// getNumbers('агент 007');
// getNumbers('а я томат');

// //console.log(getNumbers('а я томат'));


// const checkMeetingPossibility = (workingHoursStart, workingHoursEnd, meetingStart, meetingDuration) => {
//   const arrWorkingHoursStart = workingHoursStart.split(':');
//   const arrWorkingHoursEnd = workingHoursEnd.split(':');
//   const arrMeetingStart = meetingStart.split(':');
//   workingHoursStart = Number(arrWorkingHoursStart[0]) * 60 + Number(arrWorkingHoursStart[1]);
//   workingHoursEnd = Number(arrWorkingHoursEnd[0]) * 60 + Number(arrWorkingHoursEnd[1]);
//   meetingStart = Number(arrMeetingStart[0]) * 60 + Number(arrMeetingStart[1]);
//   const meetingHoursLeft = workingHoursEnd - meetingStart;
//   // console.log(workingHoursStart);
//   // console.log(workingHoursEnd);
//   // console.log(meetingStart);
//   // console.log(meetingHoursLeft);
//   // console.log(meetingStart >= workingHoursStart);
//   if (meetingHoursLeft === meetingDuration) {
//     return true;
//   } else if (meetingStart <= workingHoursStart || meetingStart >= workingHoursEnd || meetingHoursLeft <= meetingDuration) {
//     return false;
//   }
//   return meetingHoursLeft >= meetingDuration;
// };

// checkMeetingPossibility();

// /*
// console.log(checkMeetingPossibility('8:15', '16:30', '15:00', 120));
// console.log(checkMeetingPossibility('08:00', '17:30', '14:00', 90)); // true
// console.log(checkMeetingPossibility('8:0', '10:0', '8:0', 120)); // true
// console.log(checkMeetingPossibility('08:00', '14:30', '14:00', 90)); // false
// console.log(checkMeetingPossibility('14:00', '17:30', '08:0', 90)); // false
// console.log(checkMeetingPossibility('8:00', '17:30', '08:00', 900)); // false
// */
