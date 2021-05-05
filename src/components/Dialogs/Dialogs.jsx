import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>Alexandr</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Yuri</div>
                <div className={s.dialog}>Vladimir</div>
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

