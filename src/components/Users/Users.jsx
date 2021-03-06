import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pages = [];

    for (let i = 1; i <= 50; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                { pages.map(p => {
                    return <span onClick={ (e) => {
                        props.onPageChanged(p)
                    } } className={ props.currentPage === p && classes.selected }>{ p }</span>
                }) }
            </div>
            { props.string }
            {
                props.users.map(u => <div key={ u.id }>
                    <span>
                        <div>
                            <NavLink to={ '/profile/' + u.id }>
                             <img src={ u.photos.small ? u.photos.small : userPhoto } width="100" alt=""/>
                            </NavLink>
                </div>
                <div>
                { u.followed
                    // если в массиве хоть один id равна id пользователя, то дизейбл
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                        props.unfollow(u.id);
                    } }>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {

                        props.follow(u.id);

                    } }>Follow</button> }
                </div>
                </span>
                    <span>
                        <span>
                            <div>{ u.name }</div>
                            <div>{ u.status }</div>
                        </span>
                    <span>
                        <div>{ "u.location.country" }</div>
                        <div>{ "u.location.city" }</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users;
