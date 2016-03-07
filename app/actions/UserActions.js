import * as types from './actionTypes';
import userServices from '../services/user-services';
import { AsyncStorage } from 'react-native';

const loginUserRequest = () => ({ type: types.LOGIN_USER_REQUEST })
const loginUserSuccess = (data) => ({ type: types.LOGIN_USER_SUCCESS, data })
const loginUserFailure = (errors) => ({ type: types.LOGIN_USER_FAILURE, errors })

export const loginUser = (email, password) => (dispatch) => {
  dispatch(loginUserRequest())
  userServices.req.login(email, password)
  .then((data) => {
    dispatch(loginUserSuccess(data))
    AsyncStorage.setItem('token', data.user.private_profile.apikey);
  })
  .catch((errors) => {
    console.log('ERRORS', errors);
    dispatch(loginUserFailure(errors))
  })
}