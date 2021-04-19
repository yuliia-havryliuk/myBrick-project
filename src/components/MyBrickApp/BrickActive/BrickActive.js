import React from 'react';
import { connect } from 'react-redux';
import s from './BrickActive.module.css';
import actions from '../../../redux/actions';
import { Link } from 'react-router-dom';

const BrickActive = ({ brickId }) => {
  return (
    <>
    </>
  );
};
const mapStateToProps = state => ({
  bricks: state,
});
export default connect(mapStateToProps)(BrickActive);
