import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputComponent} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
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


export const LoginPage: FC = () => {
    const captchaURL = useSelector((state: AppStateType) => state.auth.captchaURL)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        console.log(formData)
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login </h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
        </div>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)



