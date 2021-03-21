const ADD_MESS = 'ADD_MESS'
const UPDATE_MESS = 'UPDATE_MESS'

let initialState=  {
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
      }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESS:{
            let stateCopy={...state}
            let addMess = { id: 6, message: stateCopy.newMessText }
            
            stateCopy.messages=[...state.messages]
            stateCopy.messages.push(addMess)
            stateCopy.newMessText = ''
            return stateCopy
        }
        case UPDATE_MESS:{
            let stateCopy={...state}
            stateCopy.newMessText=action.newMess
            return stateCopy
        }
            default: return state
    }
}

export  let actionAddNewMessText=()=>{
    return {type: ADD_MESS}
}

export let actionUpdateMessText=(text)=>{
    return {
        type: UPDATE_MESS,
        newMess:text
    }
}

export default dialogsReducer