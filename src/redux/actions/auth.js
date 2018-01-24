import {createAction} from 'redux-actions';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  GET_REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
  UPDATE_ACCOUNT,
} from './names';

const login = createAction(LOGIN);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginError = createAction(LOGIN_ERROR);
const logout = createAction(LOGOUT);
const getRefreshToken = createAction(GET_REFRESH_TOKEN);
const refreshTokenSuccess = createAction(REFRESH_TOKEN_SUCCESS);
const refreshTokenError = createAction(REFRESH_TOKEN_ERROR);
const updateAccount = createAction(UPDATE_ACCOUNT);

export default {
  login,
  refreshTokenSuccess,
  refreshTokenError,
  loginSuccess,
  loginError,
  logout,
  getRefreshToken,
  updateAccount,
};
