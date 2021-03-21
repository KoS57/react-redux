import {getUserPhoto} from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_PROFILE_USER='SET_PROFILE_USER'

//--------------------------------------------------------------------------------------
let initialState={
    postData: [
      {
        id: 1,
        message: 'Hello how are you?',
        like: '15 like'
      },
      {
        id: 2,
        message: 'This is my first post :)',
        like: '17 like'
      }
    ],
    newPostText: 'program',
    profileUser:null
  }
//----------------------------------------------------------------------------------------

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':{
      let newPost = {
        id: 3,
        message: state.newPostText,
        like: 'more like'
      }
      let stateCopy={...state}
      stateCopy.postData=[...state.postData]
      stateCopy.postData.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy
    }
    case 'UPDATE_NEW_POST_TEXT':{
      let stateCopy={...state}
      stateCopy.newPostText = action.newText
      return stateCopy
    }
  case SET_PROFILE_USER:
    return{...state, profileUser:action.profile}
    default: return state
  }
}

//-------------------------------------------------------------------------------------------------

  export const actionTypeHandleClick = () => {
    return { type: ADD_POST }
  }

  export const actionTypeonPostChange = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
  }

 export   const setProfileUser=(profile)=>{
return{type:SET_PROFILE_USER, profile}
 }

 export const userPhoto=(userId)=>{
return (dispatch)=>{
  getUserPhoto(userId)
  .then(data => {
      dispatch(setProfileUser(data))

  })
}
 }
 
 //----------------------------------------------------------------------------------------------------
  export default profileReducer