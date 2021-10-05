import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { Input } from "../Common/FormsControls/FormsControl";
import { required } from "../../utils/validators/validators";

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
