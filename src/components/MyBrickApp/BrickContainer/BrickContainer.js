import React from 'react';
import { connect } from 'react-redux';
import s from './BrickContainer.module.css';
import {Link, Route} from 'react-router-dom';

const BrickContainer = ({ brickId }) => {
  return (
    <Link to={`/bricks/${brickId}`}>
      <button type="button" className={s.btn}>
        {brickId}
      </button>
    </Link>
  );
};
const mapStateToProps = state => ({
  bricks: state,
});
export default connect(mapStateToProps)(BrickContainer);
