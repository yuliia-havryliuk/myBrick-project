import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import React from 'react';
import s from './BrickContainer.module.css';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const BrickContainer = ({ bricks, auth }) => {
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <ul className={s.container}>
      {bricks &&
        bricks.map(({ brickId, stickerUrl }) => (
          <li key={brickId} className={s.itemContainer}>
            <Link to={`/bricks/${brickId}`}>
              <button type="button" className={s.btn}>
                {stickerUrl &&  <img src={stickerUrl} alt="sticker" className={s.sticker}/>}
              </button>
            </Link>
          </li>
        ))}
    </ul>
  );
};
/*const getVisibleBricks = (allBricks, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allBricks.filter(brick =>
    brick.id.toLowerCase().includes(normalizedFilter),
  );
};*/
const mapStateToProps = state => {
  return {
    bricks: state.firestore.ordered.items /*getVisibleBricks(items, filter),*/,
    auth: state.firebase.auth,
    stickerUrl: state.bricks.stickerUrl,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'items' , orderBy:['createdTime', 'desc']}]),
)(BrickContainer);
