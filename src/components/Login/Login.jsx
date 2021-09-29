import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={'input'} name={'login'} placeholder={'login'} /></div>
                <div><Field component={'input'} name={'password'} placeholder={'password'} /></div>
                <div><Field component={'input'} type={'checkbox'} name={'rememberMe'} />Remember me</div>
                <div><button>Login</button></div>
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
        console.log(formData);
        axios
            .post('https://social-network.samuraijs.com/api/1.0/auth/login', formData)
            .then(response => {
                return response.data
            })
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};


export default Login;
