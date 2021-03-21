import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink}> Profile</NavLink>
      </div>
      <div  className={s.item}>
        <NavLink to='/dialogs'activeClassName={s.activeLink}> Message</NavLink>
      </div>
      <div className={s.item}>
      <NavLink to='/users'activeClassName={s.activeLink}>Users</NavLink>
        </div>
      <div className={s.item}>
      <NavLink to='/pagin'activeClassName={s.activeLink}>Pagination</NavLink>
        </div>
      <div>
        Music
        </div>
      <div>
        Setting
        </div>
        <div className={s.item}>
      <NavLink to='/login'activeClassName={s.activeLink}>Login</NavLink>
        </div>
    </div>
  )
}

export default Navbar;