import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image_header} src={'https://coverfiles.alphacoders.com/360/36044.jpg'}
                     alt={'header'}/>
            </div>
            <div className={s.description_block}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
