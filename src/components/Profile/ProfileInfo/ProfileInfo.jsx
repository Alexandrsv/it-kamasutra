import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <>
            {/*<div>*/}
            {/*    <img className={s.image_header} src={'https://coverfiles.alphacoders.com/360/36044.jpg'}*/}
            {/*        alt={'header'} />*/}
            {/*</div>*/}
            <div className={s.description_block}>
                <h2>{props.profile.fullName}</h2>
                <img src={props.profile.photos.large} alt="" />
                <ProfileStatus status={'123'}/>
                <div>aboutMe - {props.profile.aboutMe}</div>
                <div>lookingForAJobDescription - {props.profile.lookingForAJobDescription}</div>
                <br />
                <div>{Object.entries(props.profile.contacts).map((i, index) => {
                    let url
                    if (!/^https?:\/\//.test(i[1]) && i[1]) {
                        url = 'https://' + i[1]
                    } else {
                        url = i[1]
                    }
                    return <div key={index}>{i[0]} - <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></div>
                })}</div>

            </div>
        </>
    );
};

export default ProfileInfo;
