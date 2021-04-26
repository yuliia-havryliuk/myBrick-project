import { combineReducers } from 'redux';
import actionTypes from '../types';

const items = (
  state = [
    {
      id: 'id-1',
      brickText:
        'Here will be the text of the FIRST brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 30,
      userId: 'id1234',
    },
    {
      id: 'id-2',
      brickText:
        'Here will be the text of the SECOND brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 10,
      userId: 'id4567',
    },
    {
      id: 'id-3',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-4',
      brickText:
        'Here will be the text of the FIRST brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 30,
      userId: 'id1234',
    },
    {
      id: 'id-5',
      brickText:
        'Here will be the text of the SECOND brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 10,
      userId: 'id4567',
    },
    {
      id: 'id-6',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-7',
      brickText:
        'Here will be the text of the FIRST brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 30,
      userId: 'id1234',
    },
    {
      id: 'id-8',
      brickText:
        'Here will be the text of the SECOND brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 10,
      userId: 'id4567',
    },
    {
      id: 'id-9',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-10',
      brickText:
        'Here will be the text of the FIRST brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 30,
      userId: 'id1234',
    },
    {
      id: 'id-11',
      brickText:
        'Here will be the text of the SECOND brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 10,
      userId: 'id4567',
    },
    {
      id: 'id-12',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-13',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-14',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-15',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-16',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-17',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-18',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-19',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-20',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-21',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-22',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-23',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-24',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-25',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-26',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-27',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-28',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-29',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-30',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
    {
      id: 'id-31',
      brickText:
        'Here will be the text of the THIRD brick.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, amet cumque eaque eveniet fugiat harum ipsam minus officia sit voluptate?',
      watchCounter: 12,
      userId: 'id8904',
    },
  ],
  { type, payload},
) => {
  switch (type) {
    case actionTypes.CREATE_BRICK:
      return [...state, payload];
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
const bricksReducer = combineReducers({ items, filter, brickText });
export default bricksReducer;
