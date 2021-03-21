import {userAPI} from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const COUNT_PAGE = 'COUNT_pAGE'
const TOTTAL_USERS_COUNT = 'TOTTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_FETCHING = 'SET_FETCHING'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING' 




const initialState = {
    users: [],
    countPage: 10,
    totalCount: 50,
    currentPage: 1, 
    isFetching: true,
    toggleFetchingDisable: []


}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    } 
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case COUNT_PAGE:
            return { ...state, countPage: action.count }
        case TOTTAL_USERS_COUNT:
            return { ...state, totalCount: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case SET_FETCHING:
            return { ...state, isFetching: action.load }
        case TOGGLE_FETCHING:
            return {
                ...state,
                toggleFetchingDisable: action.disable
                    ? [...state.toggleFetchingDisable, action.userId]
                    : state.toggleFetchingDisable.filter(id => id != action.userId)
            }

        default: return state
    }
}


export const follow = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCountPage = (count) => {
    return { type: COUNT_PAGE, count }
}

export const setTotalCount = (users) => {
    return { type: TOTTAL_USERS_COUNT, users }
}

export const setCurrentPage = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}

export const setIsFetching = (load) => {
    return { type: SET_FETCHING, load }
}

export const setToggleIsFetching = (disable, userId) => {
    return { type: TOGGLE_FETCHING, disable, userId }
}

export const getUsers = (currentPage, countPage) => {
    return (dispatch)=> {

        dispatch(setIsFetching(true))
        userAPI.getUsers(currentPage,countPage)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))


            })
    }
}
export default usersReducer