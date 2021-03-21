import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToPropsAuth=(state)=>{
    return{
        auth:state.auth.authoriz
    }
}

export const withAuthRedirect=(Component)=>{
    class authRedirect extends React.Component{
        render(){
            if (!this.props.auth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }        
    }
    let redirectFunc=connect(mapStateToPropsAuth)(authRedirect)
    return  redirectFunc
}