import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import actions from '../../../redux/actions';
import React from 'react';
import s from './BrickContainer.module.css';
import { Link } from 'react-router-dom';
import brickSticker from './brick-sticker.png'

const BrickInner = ({ bricks }) => {
  return (
    <>
      {bricks.map(({ id }) => (
        <Link to={`/bricks/${id}`}>
          <button type="button" className={s.btn}>
            <img src={brickSticker} alt="brick" width='50'/>
          </button>
        </Link>
      ))}
    </>
  );
};
const mapStateToProps = state => ({
  bricks: state,
});
const mapDispatchToProps = dispatch => ({
  brickIsActive: brickId => dispatch(actions.brickIsActive(brickId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrickInner);
