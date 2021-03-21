import React from 'react'
import s from './Users.module.css'
import ava from '../Foto/ava.jpg'
import { NavLink } from 'react-router-dom'
import { userAPI } from '../../api/api.js'
import { bindActionCreators } from 'redux'


const Users = (props) => {
 
    let amountPage = Math.ceil(props.totalCount / props.countPage)
    let pages = []
    for (let i = 1; i <= amountPage; i++) {
        pages.push(i)
    }
    //---------------------------------------------------------------------------
    return <div className={s.item}>
        <div className={s.text}>
            {pages.map(p => { 
                return <span className={props.currentPage === p && s.selectPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>

                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.large != null ? u.photos.large : ava} className={s.foto} alt="" />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.toggleFetchingDisable.some(id=>id===u.id)} onClick={() => {
                            props.setToggleIsFetching(true,u.id)
                            userAPI.getUnFollowed(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.setToggleIsFetching(false,u.id)

                                })
                        }
                        }>unfollow</button>
                        : <button disabled={props.toggleFetchingDisable.some(id=>id===u.id)}  onClick={() => {
                            props.setToggleIsFetching(true,u.id)
                            userAPI.getFollowed(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.setToggleIsFetching(false,u.id)

                                })
                        }
                        }>
                            follow</button>
                    }
                </div>
            </span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>u.location.country</div>
                <div>u.location.town</div>
            </span>
        </div>
        )
        }
    </div>
}


export default Users