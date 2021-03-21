import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'



const Dialogs = (props) => {
    const DialogItem = (props) => {
        const path = '/dialogs/' + props.id
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div> 
        )
    }
    const Message = (props) => {
        return (
            <div className={s.message}>
                {props.message}
            </div>
        )
    }

    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    const messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    let updateText = (event) => {
        let body = event.target.value
       props.onupdateText(body)
    }
    let addNewMess = () => {
        props.onaddNewMess()
    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
                <div>
                    <div>
                        <textarea placeholder='Enter message' onChange={updateText} value={props.dialogsPage.newMessText} ></textarea>
                    </div>
                    <div>
                        <button onClick={addNewMess} >Add message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs