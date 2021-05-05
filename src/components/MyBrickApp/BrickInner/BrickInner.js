import React from 'react';
import { connect } from 'react-redux';
import s from './BrickInner.module.css';
import { IoMdClose } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import bricksAction from './../../../redux/actions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const BrickInner = props => {
  if (!props.auth.uid) return <Redirect to="/login" />;
  return (
    <ul>
      {props.bricks.map(
        ({
          userFirstName,
          userLastName,
          brickText,
          watchCounter,
          userId,
          brickId,
          createdTime,
        }) =>
          props.match.params.id === brickId && (
            <li key={brickId}>
              <div className={s.container}>
                <div className={s.idField}>
                  <p className={s.userId}>{userId}</p>
                  <p className={s.brickId}>{brickId}</p>
                </div>
                <p>
                  {userFirstName} {userLastName}
                </p>
                <p className={s.userText}>{brickText}</p>
                <p className={s.createdTime}>{moment(createdTime.toDate()).calendar()}</p>
                <p className={s.watchCounter}>
                  <FaEye className={s.watchCounterIcon} />
                  {watchCounter}
                </p>
              </div>
            </li>
          ),
      )}
    </ul>
  );
};
const mapStateToProps = state => ({
  bricks: state.firestore.ordered.items,
  auth: state.firebase.auth,
});
const mapDispatchToProps = dispatch => ({
  onCloseBrickInner: brickId =>
    dispatch(bricksAction.onCloseBrickInner(brickId)),
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'items' }]),
)(BrickInner);
