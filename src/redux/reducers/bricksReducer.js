import { combineReducers } from 'redux';
import actionTypes from '../types';

const items = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CREATE_BRICK:
      console.log('created brick!');
      return [...state, payload];
    case actionTypes.CREATE_BRICK_ERROR:
      console.log('create brick error', payload);
      return state;
    case actionTypes.ADD_STICKER_URL:
      console.log('added url to state');
      return  payload;
    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
const brickText = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_BRICK_TEXT:
      return payload;
    default:
      return state;
  }
};
/*const addStickerUrl = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_STICKER_URL:
      console.log('added url to state');
      return payload;
    default:
      return state;
  }
};*/
const bricksReducer = combineReducers({
  items,
  filter,
  brickText,
});
export default bricksReducer;
