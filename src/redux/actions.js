import actionTypes from './types';
import { v4 as uuidv4 } from 'uuid';

const shortid = require('shortid');

const createBrick = brickText => ({
  type: actionTypes.CREATE_BRICK,
  payload: {
    id: shortid.generate(),
    brickText,
    watchCounter: 1,
    userId: uuidv4(),
  },
});
const changeBrickText = text => ({
  type: actionTypes.CHANGE_BRICK_TEXT,
  payload: text,
});
const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export default { createBrick, changeFilter, changeBrickText };
