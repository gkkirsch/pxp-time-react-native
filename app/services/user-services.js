import request from './request';
import {API_URL} from '../config';

const path = `${API_URL}users`;
const pathLogin = `${API_URL}users/authenticate`;
const req = {};

req.login = (email, password) => {
  const body = { email, password };
  return request.post(pathLogin, body).then((data) => data);
}

exports.req = req;