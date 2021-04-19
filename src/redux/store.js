import actionTypes from './types';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const bricks = (
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
  ],
  { type, payload },
) => {
  switch (type) {
    /*    case actionTypes.ACTIVE_BRICK:
      return state.map(brick =>
        brick.id === payload
          ? { ...brick, activeBrick: !brick.activeBrick }
          : brick,
      );*/
    /*    case actionTypes.WATCH_INNER_BRICK:
      return state.map(brick =>
        brick.id === payload
          ? { ...brick, watchInnerBrick: !brick.watchInnerBrick }
          : brick,
      );*/
    default:
      return state;
  }
};

const store = createStore(bricks, composeWithDevTools());

export default store;
