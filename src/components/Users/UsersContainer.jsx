import React from 'react';
import { connect } from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setStringAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from '../../redux/users-reducer';
import axios from "axios";
import Users from './Users';
import preloader from '../../assets/img/preloader.svg'

class UsersContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setString();
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setString();
            });
    };

    render() {

        return (
            <>
                { this.props.isFetching ? <img width="40" height="50" src={ preloader } alt=""/> : null }
                <Users
                    currentPage={ this.props.currentPage }
                    onPageChanged={ this.onPageChanged }
                    string={ this.props.string }
                    users={ this.props.users }
                    totalUsersCount={ this.props.totalUsersCount }
                    pageSize={ this.props.pageSize }
                    unfollow={ this.props.unfollow }
                    follow={ this.props.follow }
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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
