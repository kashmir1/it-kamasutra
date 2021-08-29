import React from "react";
import Header from "./Headers";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { authUsersAPI } from "../../api/api";

class HeadersContainer extends React.Component {

    componentDidMount() {
            authUsersAPI.getUserName()
            .then(data => {
                //Проверка - если в дате сидит resultCode = 0 (все хорошо, мы залогинены), кто в этом случае мы диспатчим авторизационные данные
                if (data.resultCode === 0) { // тут был косяк, 0 - число, а я указал строку
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header { ...this.props } />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
export default connect (mapStateToProps, {setAuthUserData})(HeadersContainer)


