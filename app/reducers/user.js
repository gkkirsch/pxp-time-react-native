import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  detail: {},
  isAuth: false
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST: return { ...state, isLoading: true };
    case types.LOGIN_USER_SUCCESS: return { ...state, detail: action.data.user.private_profile, isLoading: false, isAuth: true };
    case types.LOGIN_USER_FAILURE: return { ...state, errors: action.data.errors, isLoading: false };
    default:
      return state;
  }
}
