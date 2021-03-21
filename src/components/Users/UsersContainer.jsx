import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCountPage, setTotalCount, setCurrentPage, setIsFetching, 
    setToggleIsFetching,getUsers } from '../../redux/users-reducer'
import Preload from '../Component/Preload'
import { userAPI } from '../../api/api'

class UsersContainer extends React.Component {


    componentDidMount() {
this.props.getUsers(this.props.currentPage,this.props.countPage)
        // { this.props.setIsFetching(true) }
        // userAPI.getUsers(this.props.currentPage, this.props.countPage)
        //     .then(data => {
        //         { this.props.setIsFetching(false) }
        //         this.props.setUsers(data.items)
        //         this.props.setTotalCount(data.totalCount)
        //         console.log(data)

        //     })
    }  
    onPageChanged = (pageNumber) => {
        { this.props.setIsFetching(true) }
        this.props.setCurrentPage(pageNumber)
        userAPI.getPageUsers(pageNumber)
            .then(data => {
                { this.props.setIsFetching(false) }
                this.props.setUsers(data.items)
            })
    }
    render() {
 
        return <>
            {this.props.isFetching ? <Preload /> : null}
            <Users currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                pages={this.pages}
                totalCount={this.props.totalCount}
                countPage={this.props.countPage}
                toggleFetchingDisable={this.props.toggleFetchingDisable}
                setToggleIsFetching={this.props.setToggleIsFetching}

            />
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        countPage: state.usersPage.countPage,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFetchingDisable: state.usersPage.toggleFetchingDisable

    }
}



export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCountPage, setTotalCount, setCurrentPage, setIsFetching, setToggleIsFetching,getUsers })(UsersContainer)
