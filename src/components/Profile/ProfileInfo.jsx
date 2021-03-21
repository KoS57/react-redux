import React from 'react'
import s from './Profile.module.css'
import Preload from '../Component/Preload'
import Foto from '../Foto/ava.jpg'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

  
   
        // if (!props.profile) {
        //     return <Preload />
        // }
    
    return (

        <div className={s.content}>
            <div className={s.img}>
                <img src='https://st.turtella.ru/photos/723/l144733.jpg' />
            </div>
            <div >
            
                <img src={!props.profile?<Preload />:(props.profile.photos.large === null ? Foto : props.profile.photos.large)} />
            </div>
            <ProfileStatus status={"Hello me frends"}/>

        </div>
    )
}

export default ProfileInfo