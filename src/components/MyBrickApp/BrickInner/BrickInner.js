import React from 'react';
import { connect } from 'react-redux';
import s from './BrickInner.module.css';
import { IoMdClose } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';

const BrickInner = props => {
  console.log(props);
  return (
    <>
      {props.bricks.map(
        ({ id, brickText, watchCounter, userId }) =>
          props.match.params.id === id && (
            <div className={s.container}>
              <div className={s.idField}>
                <p className={s.userId}>{userId}</p>
                <p className={s.brickId}>{id}</p>
              </div>
              <p className={s.userText}>{brickText}</p>
              <button type="button" className={s.closeBtn}>
                <IoMdClose className={s.icon} />
              </button>
              <p className={s.watchCounter}>
                <FaEye className={s.watchCounterIcon}/>
                {watchCounter}
              </p>
            </div>
          ),
      )}
    </>
  );
};
const mapStateToProps = state => ({
  bricks: state,
});
export default connect(mapStateToProps)(BrickInner);
