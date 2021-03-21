import React from 'react'
import Dialogs from './Dialogs'
import { actionAddNewMessText, actionUpdateMessText } from '../../redux/dialog-reducer'
import { connect } from 'react-redux'
// import {withAuthRedirect} from'../hoc/withAuthRedirerct'

const mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsPage,
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onaddNewMess:()=>{
         dispatch(actionAddNewMessText())
        } ,
        onupdateText:(body)=>{ 
            dispatch(actionUpdateMessText(body)) 
        } 
    }
}
// let AuthRedirectComponent=withAuthRedirect(Dialogs)

const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer

