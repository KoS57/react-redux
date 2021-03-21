import React from 'react'
import s from './Header.module.css'
import Logo from '../Foto/logo.jpg'
import { NavLink } from 'react-router-dom'



const Header=(props)=>{
  return(
        <div className={s.header} >
<img src={Logo}/>
<div className={s.loginBlock}>
   {props.auth.authoriz ? props.auth.login : <NavLink to={'/login'}>Login </NavLink>}
</div>
      </div>
  )
}

export default Header