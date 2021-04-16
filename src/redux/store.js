import actionTypes from './types';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const bricks = (
  state = [
    { id: 'id-1', activeBrick: false, watchInnerBrick: false },
    { id: 'id-2', activeBrick: false, watchInnerBrick: false },
    { id: 'id-3', activeBrick: false, watchInnerBrick: false },
  ],
  { type, payload },
) => {
  switch (type) {
    case actionTypes.ACTIVE_BRICK:
      return state.map(brick =>
        brick.id === payload
          ? { ...brick, activeBrick: !brick.activeBrick }
          : brick,
      );
    case actionTypes.WATCH_INNER_BRICK:
      return state.map(brick =>
        brick.id === payload
          ? { ...brick, watchInnerBrick: !brick.watchInnerBrick }
          : brick,
      );
    default:
      return state;
  }
};

const store = createStore(bricks, composeWithDevTools());

export default store;
