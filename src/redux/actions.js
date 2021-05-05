import actionTypes from './types';
import fire from './../config/fbConfig';

const shortid = require('shortid');

const createBrick = ( brickText ) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection('items')
      .add({
        userFirstName: profile.firstName,
        userLastName: profile.lastName,
        watchCounter: 1,
        userId: userId,
        brickId: shortid.generate(),
        createdTime: new Date(),
        brickText,
      })
      .then(() => {
        dispatch({
          type: actionTypes.CREATE_BRICK,
        });
      })
      .catch(payload => {
        dispatch({
          type: actionTypes.CREATE_BRICK_ERROR,
          payload,
        });
      });
  };
};

const changeBrickText = text => ({
  type: actionTypes.CHANGE_BRICK_TEXT,
  payload: text,
});
const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

const signIn = credentials => {
  fire
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(u => {
      console.log('Successfully logged in!', credentials.email);
    })
    .catch(err => {
      console.log('Log in failed :(', credentials.email, err.toString());
    });
};
const addStickerUrl = url => ({
  type: actionTypes.ADD_STICKER_URL,
  payload: url,
});
// const signIn = credentials => {
//   return (dispatch) => {
//     fire
//         .auth()
//         .signInWithEmailAndPassword(credentials.email, credentials.password)
//         .then(() => {
//           dispatch({ type: actionTypes.LOGIN_SUCCESS });
//         })
//         .catch((err) => {
//           dispatch({ type: actionTypes.LOGIN_ERROR, err });
//         });
//
//   };
// };
// const signIn = credentials => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firebase = getFirebase();
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(() => {
//         dispatch({ type: actionTypes.LOGIN_SUCCESS });
//       })
//       .catch((err) => {
//         dispatch({ type: actionTypes.LOGIN_ERROR, err });
//       });
//
//   };
// };
export default {
  createBrick,
  changeFilter,
  changeBrickText,
  signIn,
  addStickerUrl,
};
