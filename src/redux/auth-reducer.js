const SET_AUTH_USER ='SET_AUTH_USER'

let initialState={
    id:null,
    email:null,
    login:null,
    authoriz:false,
    
}

 const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_AUTH_USER:
            return{
                ...state,
                ...action.data,
                authoriz:true
            }
            default:return state
    }
}

export const setAuthUser=(id,email,login)=>{
    return { type:SET_AUTH_USER, data:{id,email,login}}
}

export default authReducer