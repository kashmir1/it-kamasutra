import React from "react";
import Header from "./Headers";
import { connect } from "react-redux";
import { getAuthUserData, logout, setAuthUserData } from "../../redux/auth-reducer";

class HeadersContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
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
export default connect (mapStateToProps, {getAuthUserData, logout})(HeadersContainer)


