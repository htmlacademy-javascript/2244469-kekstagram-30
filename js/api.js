import { BASE_URL, Route } from './constants';
import { showErrorMessage } from './loading-error.js';

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    showErrorMessage();
    throw new Error('Не удалось загрузить данные с сервера:'`${response.status} ${response.statusText}`);
  })
  .catch(() => {
    throw new Error('Не удалось загрузить данные с сервера');
  });

const sendData = (body) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error('Не удалось отправить форму');
  });

export { getData, sendData };
