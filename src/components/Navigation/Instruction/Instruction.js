import s from './Instruction.module.css';
import React from 'react';
import Layout from '../../Layout/Layout';
import bricksAction from '../../../redux/actions';
import { connect } from 'react-redux';
import {NavLink, Redirect, withRouter} from 'react-router-dom';

const Instruction = ({ profile, auth }) => {
  return (
    <div className={s.upperContainer}>
      <div className={s.container}>
        <h2 className={s.greeting}>
          <p className={s.hi}>Hi,</p>
          <span>
            {' '}
            {profile.firstName} {profile.lastName}{' '}
          </span>
          !
        </h2>
        <p className={s.title}>
          This app will help You to leave Your sign in history!
        </p>
        <ul className={s.list}>
          <p> All You have to do is to:</p>
          <li className={s.btnItem}>
            1. Click{' '}
              <NavLink
                to="/createbrick"
                className={s.createBtn}
                activeClassName={s.activeMenuItem}
              >
                Create brick
              </NavLink>
          </li>
          <li>2. Write Your message</li>
          <li className={s.btnItemSmall}>
            3. Choose sticker if You want and click{' '}
            <span className={s.addStickerBtn}>Add sticker</span>
          </li>
          <li className={s.btnItemTop}>
            4. Click <span className={s.createBrickBtn}>Create brick</span> at
            the bottom of form
          </li>
        </ul>
        <div className={s.ending}>
          <h3>That's all!</h3>
          <h3>Enjoy Your leave-sign-in-history moment :)</h3>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth,
});

export default withRouter(connect(mapStateToProps)(Instruction));
