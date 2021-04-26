import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./reducers/authReducer";
import bricksReducer from "./reducers/bricksReducer";

const rootReducer = combineReducers({
  bricks: bricksReducer,
  auth: authReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
