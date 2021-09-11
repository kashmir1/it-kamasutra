import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    getUsers,
    setCurrentPage,
    setString, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow
} from '../../redux/users-reducer';
import axios from "axios";
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //         this.props.setString();
        //     });
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setString();
        //     });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    string={this.props.string}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        string: state.usersPage.string,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setString,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer)
