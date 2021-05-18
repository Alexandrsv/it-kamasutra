import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {

    return (
        <header className={s.header}>
            <img alt='logo' src={'https://svgx.ru/svg/1775543.svg'}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <NavLink to={'/profile/' + props.userId}>{props.login} <button onClick={props.logout}>Logout</button></NavLink>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>

    );
};

export default Header;
