import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} required={true} component={InputComponent} validate={[required]}/></div>
            <div><Field placeholder={'Pass'} type="password" required={true} name={'password'} component={InputComponent} validate={[required]}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
