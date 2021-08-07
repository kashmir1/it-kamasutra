import React from 'react';
import classes from './Users.module.css'
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
       follow: (userId) => {
           dispatch(followAC(userId))
       },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
           dispatch(setUsersAC(users))
        }
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(Users)
