import React from 'react'
import {actionTypeHandleClick,actionTypeonPostChange } from '../../redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps=(state)=>{
    return {
        profilePage:state.profilePage
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        conHandleClick:()=>{
            dispatch(actionTypeHandleClick())
        },
        conOnPostChange:(text)=>{
            dispatch(actionTypeonPostChange(text)) 
        }

    }
}
const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostContainer