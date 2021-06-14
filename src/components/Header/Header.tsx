import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    isAuth:boolean
    login:string|null
    logout:()=>void
    userId:number|null
}

const Header:FC<PropsType> = (props) => {

    return (
        <header className={s.header}>
            <img alt='logo' src={'https://svgx.ru/svg/1775543.svg'}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <NavLink to={`/profile/${props.userId}`}>
                        {props.login}
                        <button onClick={props.logout}>Logout</button>
                    </NavLink>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>

    );
};

export default Header;
