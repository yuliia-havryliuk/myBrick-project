import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import React from 'react';
import Search from './Search/Search';
import logo from './logo.png';
import SignedInLinks from './SignedInLinks/SignedInLinks';
import SignedOutLinks from './SignedOutLinks/SignedOutLinks';
import { connect } from 'react-redux';

function Navigation({ auth }) {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className={s.menu}>
      <div className={s.container}>
        <NavLink to="/">
          <div className={s.logo}>
            <img src={logo} alt="MyBrickLogo" width="45" />
            <h3>myBrick</h3>
          </div>
        </NavLink>
        <div className={s.rightMenu}>
          {links}
        </div>
      </div>
    </nav>
  );
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navigation);
