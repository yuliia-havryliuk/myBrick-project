import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import React from 'react';

function Navigation() {
  return (
    <nav className={s.menu}>
      <div className={s.container}>
        <NavLink to="/">
          <div className={s.logo}>
            <img src="logo.png" alt="MyBrickLogo" width="45" />
            <h3>myBrick</h3>
          </div>
        </NavLink>
        <div className={s.rightMenu}>
          <NavLink to="/instruction" className={s.rightMenuItem} activeClassName = {s.activeMenuItem}>How does it work?</NavLink>
          <NavLink to="/registration" className={s.rightMenuItem} activeClassName = {s.activeMenuItem}>Register</NavLink>
          <NavLink to="/login" className={s.rightMenuItem} activeClassName = {s.activeMenuItem}>Log in</NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
