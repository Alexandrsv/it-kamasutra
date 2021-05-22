import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import avaPlaceholder from '../../../assets/images/avatar-placeholder.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveAvatarPhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length){
            saveAvatarPhoto(e.target.files[0])
        }
    }
    return (
        <>
            <div className={s.description_block}>
                <h2>{profile.fullName}</h2>
                <img className={s.avatarImg} src={profile.photos.large || avaPlaceholder} alt=""/>
                {isOwner && <input
                    onChange={mainPhotoSelected}
                    type="file"
                    name="avatar_upload"
                    accept=".jpg, .jpeg, .png, .svg"
                />}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <div>aboutMe - {profile.aboutMe}</div>
                <div>lookingForAJobDescription - {profile.lookingForAJobDescription}</div>
                <br/>
                <div>{Object.entries(profile.contacts).map((i, index) => {
                    let url
                    if (!/^https?:\/\//.test(i[1]) && i[1]) {
                        url = 'https://' + i[1]
                    } else {
                        url = i[1]
                    }
                    return <div key={index}>{i[0]} - <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                    </div>
                })}</div>

            </div>
        </>
    );
};

export default ProfileInfo;
