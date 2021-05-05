import actionTypes from '../types';
import { combineReducers } from 'redux';

const initState = {
  authErrorSignIn: null,
  authErrorSignUp: null,
};
const auth = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_ERROR:
      console.log('Login error');
      return {
        ...state,
        authErrorSignIn: 'Login failed',
      };
    case actionTypes.LOGIN_SUCCESS:
      console.log('Login success');
      return {
        ...state,
        authErrorSignIn: null,
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
        authErrorSignUp: null,
      };
    case actionTypes.SIGN_UP_ERROR:
      console.log('Sign Up failed');
      return {
        ...state,
        authErrorSignUp: 'Sign Up failed',
      };
    default:
      return state;
  }
};
const authReducer = combineReducers({ auth });
export default authReducer;
