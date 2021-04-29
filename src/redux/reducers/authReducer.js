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
    default:
      return state;
  }
};
const authReducer = combineReducers({ auth });
export default authReducer;
