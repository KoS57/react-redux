import React from 'react'
import s from './Profile.module.css'
import MyPostContainer from '../MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo'

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profileInfo}/>
            <MyPostContainer profilePage={props.profilePage} />
        </div>
    )}

export default Profile