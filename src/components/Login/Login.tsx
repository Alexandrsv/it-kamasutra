import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputComponent} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControl/FormsControl.module.css'
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaURL: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                             handleSubmit,
                                                                                             error,
                                                                                             captchaURL
                                                                                         }) => {
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

type LoginFormValuesType = {
    email: null | string
    password: string | null
    rememberMe: boolean;
    captcha: string | null
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
    captchaURL: string | null
}
type MapDispatchPropsType = {
    login: (email: null | string, password: string | null, rememberMe: boolean, captcha: string | null) => void

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
})

export default connect(mapStateToProps, {login})(Login);
