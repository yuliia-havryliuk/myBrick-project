import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import React from 'react';
import s from './BrickContainer.module.css';
import { Link } from 'react-router-dom';
import brickSticker from './brick-sticker.png';

const BrickInner = ({ bricks }) => {
  return (
    <ul className={s.container}>
      {bricks && bricks.map(({ id }) => (
        <li key={id} className={s.itemContainer}>
          <Link to={`/bricks/${id}`}>
            <button type="button" className={s.btn}>
              <p>{id}</p>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
const getVisibleBricks = (allBricks, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allBricks.filter(brick =>
    brick.id.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ bricks: { items, filter } }) => ({
  bricks: getVisibleBricks(items, filter),
});
const mapDispatchToProps = dispatch => ({
  brickIsActive: brickId => dispatch(actions.brickIsActive(brickId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BrickInner);
