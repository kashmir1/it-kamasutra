import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followUsersToggleAPI } from "../../api/api";

let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                        props.toggleFollowingProgress(true, u.id);
                        followUsersToggleAPI.unfollowUser(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id);

                            });
                    } }>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {

                        props.toggleFollowingProgress(true, u.id);

                        followUsersToggleAPI.followUser(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id);

                            });
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
