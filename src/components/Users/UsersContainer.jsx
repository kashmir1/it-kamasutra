import React from 'react';
import classes from './Users.module.css'
import { connect } from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setStringAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        string: state.usersPage.string,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },

        setString: (string) => {
           dispatch(setStringAC(string))
        },

        setCurrentPage: (pageNumber) => {
           dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
};


export default connect (mapStateToProps, mapDispatchToProps)(Users)
