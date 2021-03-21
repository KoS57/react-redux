import React from 'react'
import s from './Preload.module.css'
import load from '../Foto/load.gif'


const Preload=(props)=>{
    return <div className={s.gif}>
        <img src={load} alt=""/>
        </div>
    
}

export default Preload