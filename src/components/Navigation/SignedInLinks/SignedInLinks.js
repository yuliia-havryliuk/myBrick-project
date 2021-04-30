import { NavLink } from 'react-router-dom';
import s from './SignedInLinks.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../redux/actions/authActions';

function SignedInLinks({ signOut, profile }) {
  return (
    <nav className={s.menu}>
      <div className={s.rightMenu}>
        <NavLink
          to="/createbrick"
          className={s.createBtn}
          activeClassName={s.activeMenuItem}
        >
          Create brick
        </NavLink>
        <a onClick={signOut} className={s.rightMenuItem}>
          Log Out
        </a>
        <NavLink to="/" className={s.initials}>
          {profile.initials}
        </NavLink>
      </div>
    </nav>
  );
}
const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
