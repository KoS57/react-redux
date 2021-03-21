import *as axios from 'axios'

const instace=axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
    }
}) 

export const userAPI={
    getUsers(currentPage=1,countPage=10){
        return instace.get('users?page=${currentPage}&count=${countPage}')
        .then(response=>  {
             return response.data})
    },
    getPageUsers(pageNumber){
        return instace.get(`users?page=${pageNumber}`)
        .then(response=>  {
             return response.data})
    },
    getUnFollowed(id){
        return instace.delete(`follow/${id}`)
        .then (response=>{
            return response.data})
    },
    getFollowed(id){
        return instace.post(`follow/${id}`)
        .then(response=>{
            return response.data
        })
    }
}
//----------------------------------------------------
export const getUserPhoto=(userId)=>{
    return instace.get(`profile/`+userId)
    .then(response=>{
        return response.data
    })
}

    
    
