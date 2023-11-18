import { BASE_URL, Route, ErrorText } from './constants';
// import { showErrorMessage } from './loading-error.js';

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(ErrorText.SEND_DATA);
    }
  });

export { getData, sendData };
