import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setProfileUser,userPhoto } from '../../redux/profile-reducer'
import  {withRouter} from 'react-router-dom'

//-----------------------------------------------------------
class ProfileContainer extends React.Component {
    componentDidMount() {
       let userId=this.props.match.params.userId
       this.props.userPhoto(userId)
    }   
    render() {
        return <Profile {...this.props} />
    }
}
//--------------------------------------------------------------------------------------------
const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileUser
})

let urlData=withRouter(ProfileContainer)
//--------------------------------------------------------------------------------------------

export default connect(mapStateToProps, { setProfileUser,userPhoto })(urlData)