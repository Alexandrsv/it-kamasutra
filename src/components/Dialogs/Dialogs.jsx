import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>Alexandr</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Yuri</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Vladimir</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    нОрм?
                </div>
                <div className={s.message}>
                    нОрм.
                </div>
                <div className={s.message}>
                    нОрм!
                </div>
            </div>
        </div>
    );
};

export default Dialogs;

