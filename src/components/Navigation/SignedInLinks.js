import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import React from 'react';
function SignedInLinks() {
  return (
    <nav className={s.menu}>
      <div className={s.rightMenu}>
        <NavLink
          to="/createbrick"
          className={s.rightMenuItem}
          activeClassName={s.activeMenuItem}
        >
          Create brick
        </NavLink>
        <NavLink
          to="/"
          className={s.rightMenuItem}
        >
          Log Out
        </NavLink>
        <NavLink
          to="/"
          className={s.rightMenuItem}
        >
          YH
        </NavLink>
      </div>
    </nav>
  );
}
export default SignedInLinks;
