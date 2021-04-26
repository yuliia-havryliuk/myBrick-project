import React from 'react';
import { connect } from 'react-redux';
import s from './BrickInner.module.css';
import { IoMdClose } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import bricksAction from './../../../redux/actions';

const BrickInner = props => {
  return (
    <ul>
      {props.bricks.bricks.items.map(
        ({ id, brickText, watchCounter, userId }) =>
          props.match.params.id === id && (
            <li key={id}>
              <div className={s.container}>
                <div className={s.idField}>
                  <p className={s.userId}>{userId}</p>
                  <p className={s.brickId}>{id}</p>
                </div>
                <p className={s.userText}>{brickText}</p>
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
  bricks: state,
});
const mapDispatchToProps = dispatch => ({
  onCloseBrickInner: brickId =>
    dispatch(bricksAction.onCloseBrickInner(brickId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrickInner);
