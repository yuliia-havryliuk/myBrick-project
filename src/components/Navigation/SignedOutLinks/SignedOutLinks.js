import { NavLink } from 'react-router-dom';
import s from '../Navigation.module.css';
import React from 'react';
function SignedOutLinks() {
    return (
        <nav className={s.menu}>
            <div className={s.rightMenu}>
                <NavLink
                    to="/signup"
                    className={s.rightMenuItem}
                    activeClassName={s.activeMenuItem}
                >
                    Sign Up
                </NavLink>
                <NavLink
                    to="/login"
                    className={s.rightMenuItem}
                    activeClassName={s.activeMenuItem}
                >
                    Log In
                </NavLink>
            </div>
        </nav>
    );
}
export default SignedOutLinks;
