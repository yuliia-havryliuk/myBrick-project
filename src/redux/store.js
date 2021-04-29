import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import bricksReducer from './reducers/bricksReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
  bricks: bricksReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  createdDate: new Date(),
});

export default rootReducer;
