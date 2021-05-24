import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InputComponent} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControl/FormsControl.module.css'

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><Field placeholder={'Email'} name={'email'} required={true} component={InputComponent}
                        validate={[required]}/></div>
            <div><Field placeholder={'Pass'} type="password" required={true} name={'password'}
                        component={InputComponent} validate={[required]}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={'input'}/>remember me</div>
            {captchaURL && <img src={captchaURL} alt="captcha"/>}
            {captchaURL &&
            <div><Field placeholder={'captcha'} required={true} name={'captcha'}
                        component={InputComponent}/></div>}
            {error && <div style={{padding: '19px 0'}}>
                <span className={s.formSummaryError}>{error}</span>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login </h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
})

export default connect(mapStateToProps, {login})(Login);
