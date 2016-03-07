/**
 * Request.js from https://github.com/soliury/noder-react-native
 */


//---------------------------------------------------------------------------
// These functions are the basic request functions used to interact with
// api's with fetch, urls need to be passed in accordingly.
//---------------------------------------------------------------------------
const request = {};


const handleErrors = (res) => {
  if (res.status === 401) {
    localStorage.clear();
  }
  if (res.ok) {
    return res;
  } else {
    return res.json()
    .then((err) => {
      if (err.hasOwnProperty('non_field_errors')) {
        throw new Error(err.non_field_errors[0]);
      } else {
        throw new Error('An unknown error occurred');
      }
    });
  }
};


request.get = (url, params) => {
  if (params) {
  }
  return fetch(url)
    .then(handleErrors)
    .then((res) => res.json());
};

request.post = (url, body, token = {}) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token ? `Token ${token}` : ''
    },
    body: JSON.stringify(body)
  };
  return fetch(url, fetchOptions)
    .then(handleErrors)
    .then((res) => res.json());
};

request.delete = (url, body, token = {}) => {
  const fetchOptions = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token ? `Token ${token}` : ''
    },
    body: JSON.stringify(body)
  };
  return fetch(url, fetchOptions)
    .then(handleErrors)
    .then((res) => res);
};

request.patch = (url, body, jwt = '') => {
  const fetchOptions = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: jwt ? `Token ${jwt}` : ''
    },
    body: JSON.stringify(body)
  };
  return fetch(url, fetchOptions)
    .then(handleErrors)
    .then((res) => res.json());
};

request.protectedGet = (url, jwt, params = {}) => {
  if (params) {
  }
  const fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: jwt ? `Token ${jwt}` : ''
    }
  };
  return fetch(url, fetchOptions)
    .then(handleErrors)
    .then((res) => res.json());
};

request.put = (url, body, token, params) => {
  if (params) {
  }
  const fetchOptions = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token ? `Token ${token}` : ''
    },
    body: JSON.stringify(body)
  };
  return fetch(url, fetchOptions)
    .then(handleErrors)
    .then((res) => res.json());
};


module.exports = request;