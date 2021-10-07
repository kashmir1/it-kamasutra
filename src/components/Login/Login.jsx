import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Input } from "../Common/FormsControls/FormsControl";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from './../Common/FormsControls/FormsControl.module.css'

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} name={'email'}
                            placeholder={'email'}
                            validate={[required]}
                /></div>
                <div><Field component={Input} name={'password'}
                            placeholder={'password'}
                            validate={[required]}
                /></div>
                <div><Field component={'input'} type={'checkbox'} name={'rememberMe'}/>Remember me</div>
                <div>
                    <button>Login</button>
                </div>
                {props.error && <div className={classes.formSummaryError}>
                    {props.error}
                </div>}

            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
