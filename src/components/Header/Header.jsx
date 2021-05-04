import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo' src={'https://svgx.ru/svg/1775543.svg'}/>
        </header>
    );
};

export default Header;
