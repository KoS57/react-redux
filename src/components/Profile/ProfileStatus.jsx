import React from 'react'
import s from './Profile.module.css'
import Preload from '../Component/Preload'


const ProfileStatus = (props) => {

    return (<div>

        <div>
            <span>{props.status}</span>
        </div>
        <div>
            <input value={props.status}/>
        </div>
        </div>  
    )
}

export default ProfileStatus