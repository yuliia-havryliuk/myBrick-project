import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import React from 'react';
import BrickContainer from '../BrickContainer/BrickContainer';
import BrickActive from '../BrickActive/BrickActive';

const BrickInner = ({ bricks, brickIsActive }) => {
  return (
    <>
      {bricks.map(({ id, activeBrick }) => (
        <button type="button" onClick={() => brickIsActive(id)}>
          {activeBrick ? <BrickActive brickId = {id}/> : <BrickContainer brickId = {id}/>}
        </button>
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
