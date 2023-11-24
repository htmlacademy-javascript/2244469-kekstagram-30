import { BASE_URL, Route, HttpMethods, ErrorText } from './constants';

const fetchData = async (url, method = HttpMethods.GET, body = null) => {
  const response = await fetch(url, { method, body });
  if (!response.ok) {
    throw new Error(ErrorText[method]);
  }
  return response.json();
};

const getData = async () => fetchData(`${BASE_URL}${Route.GET_DATA}`);

const sendData = async (body) =>
  fetchData(
    `${BASE_URL}${Route.SEND_DATA}`,
    HttpMethods.POST,
    body,
  );

export { getData, sendData };
