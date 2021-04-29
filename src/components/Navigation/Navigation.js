import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import React from 'react';
import Search from "./Search/Search";
import logo from './logo.png'
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from 'react-redux'

function Navigation() {
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
          <Search />
          <NavLink to="/instruction" className={s.rightMenuItem} activeClassName = {s.activeMenuItem}>How does it work?</NavLink>
          <SignedOutLinks/>
          <SignedInLinks/>
        </div>
      </div>
    </nav>
  );
}

export default connect()(Navigation);
