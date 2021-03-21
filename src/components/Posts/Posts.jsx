import React from 'react'
import s from './Posts.module.css'

const Posts=(props)=>{

    return(
<div className={s.posts}>
    <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg'/>
     {props.message}
     <div>
         <span>
             {props.like}
         </span>
     </div>
</div>
    )
}
export default Posts