import React from 'react';
import { connect } from 'react-redux';
import s from './BrickActive.module.css';
import actions from '../../../redux/actions';
import { Link } from 'react-router-dom';

const BrickActive = ({ brickId, watchInnerBrick }) => {
  return (
    <>
      <div className={s.brickContainer}>
        <p>{brickId}</p>
        <Link to={`/bricks/${brickId}/watch`}>
          <button type="button" onClick={() => watchInnerBrick(brickId)}>
            watch
          </button>
          {watchInnerBrick ? <p>I work!</p> : <p>i don-t work</p>}
        </Link>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  bricks: state,
});
const mapDispatchToProps = dispatch => ({
  watchInnerBrick: brickId => dispatch(actions.watchInnerBrick(brickId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrickActive);
