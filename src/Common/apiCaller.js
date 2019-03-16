import errorLogger from './errorLogger';

const Fetch = async (url, method, token) => {
  try {
    const headers = {};

    if (method === 'POST') {
      headers.Authorization = `Bearer ${token}`;
      // headers['Content-Type'] = 'application/json';
      headers['Access-Control-Allow-Credentials'] = true;
      // headers.Accept = 'application/json';
    }

    console.log('mode, headers', method, headers);

    const initOptions = {
      credentials: 'include',
      headers,
      // mode: 'cors',
      method,
      // body: {},
    };
    console.log('initOptions ', initOptions);
    const response = await fetch(url, initOptions);
    console.log('response', response);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log('error', error);
    errorLogger(error, 'apiCaller');
  }
  return '';
};

const get = url => Fetch(url, 'GET');

const post = (url, token) => Fetch(url, 'POST', token);

const put = url => Fetch(url, 'PUT');

export default { get, post, put };
