import React from 'react'
import Post from '../Posts/Posts.jsx'
import s from './MyPosts.module.css'





const MyPosts = (props) => {
    const newPost = props.profilePage.postData.map((p) => <Post id={p.id} message={p.message} like={p.like} />)

    let textInput = React.createRef()
    let handleClick = () => {
        props.conHandleClick() 
    }
    let onPostChange = () => {
        let text = textInput.current.value
        props.conOnPostChange(text)
        
    }

    return (

        <div className={s.postBlok}>
            <h3> My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={textInput} value={props.profilePage.newPostText} />
                </div>
                <div>
                    <button onClick={handleClick}>Add post</button>
                </div>
            </div>
            <div >
                {newPost}
            </div>
        </div>

    )
}
export default MyPosts;