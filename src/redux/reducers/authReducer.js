import actionTypes from '../types';
import { combineReducers } from 'redux';


const auth = (state = '', { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
const authReducer = combineReducers({ auth });
export default authReducer;
