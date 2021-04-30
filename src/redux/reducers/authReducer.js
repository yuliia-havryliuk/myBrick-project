import actionTypes from '../types';
import { combineReducers } from 'redux';

const initState = {
  authError: null,
};
const auth = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      console.log('Login error');
      return {
        ...state,
        authError: 'Login failed',
      };
    case actionTypes.LOGIN_SUCCESS:
      console.log('Login success');
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      console.log('Sign Out success');
      return {
        ...state,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      console.log('Sign Up success');
      return {
        ...state,
        authError: null,
      };
    case actionTypes.SIGN_UP_ERROR:
      console.log('Sign Up failed');
      return {
        ...state,
        authError: action.error.message,
      };
    default:
      return state;
  }
};
const authReducer = combineReducers({ auth });
export default authReducer;
