import profileReducer from './profile-reducer'
import  dialogsReducer from './dialog-reducer'


let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: '1', name: 'Vika' },
        { id: '2', name: 'Dimych' },
        { id: '3', name: 'Sveta' },
        { id: '4', name: 'Viktor' },
        { id: '5', name: 'Kostya' },
        { id: '6', name: 'Valera' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is you work?' },
        { id: 3, message: 'Happy work' },
        { id: 4, message: 'It cool' },
        { id: 5, message: 'Yes' }
      ],
      newMessText: '',
    },
    profilePage: {
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
    }


  },
  getState() {
    return this._state
  },
  _callSubscriber() {
  },
  subscribe(observer) {
    this._callSubscriber = observer

  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)

  }

}

window.store = store;



export default store


