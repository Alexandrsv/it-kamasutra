import React, {useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import avaPlaceholder from '../../../assets/images/avatar-placeholder.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveAvatarPhoto, saveProfile}) => {

        let [editMode, setEditMode] = useState(false)

        if (!profile) {
            return <Preloader/>
        }

        const mainPhotoSelected = (e) => {
            if (e.target.files.length) {
                saveAvatarPhoto(e.target.files[0])
            }
        }

        const onSubmit = (formData) => {
            console.log(formData)
            saveProfile(formData) //решение не канон
                .then(()=> {
                    setEditMode(false)
                })
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
                    <hr/>
                    <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                    <hr/>
                    {editMode ?
                        <ProfileDataForm profile={profile}
                                         isOwner={isOwner}
                                         initialValues={profile}
                                         onSubmit={onSubmit}/> :
                        <ProfileData profile={profile}
                                     isOwner={isOwner}
                                     goToEditMode={() => {
                                         setEditMode(true)
                                     }}/>}

                </div>
            </>
        );
    }
;

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>📝edit</button>
            </div>}
            <div><b>Looking for a job</b> - {profile.lookingForAJob ? 'yes' : 'no'}</div>
            {profile.lookingForAJob &&
            <div><b>My skills</b> - {profile.lookingForAJobDescription}</div>
            }

            <div><b>About me</b> - {profile.aboutMe}</div>
            <br/>
            <b>Contacts:</b>
            <div>{Object.entries(profile.contacts).map((i, index) => {
                return <Contacts key={index} contactTitle={i[0]} contactValue={i[1]}/>
            })}</div>
        </div>
    )
}


export const Contacts = ({contactTitle, contactValue}) => {
    let url
    if (!/^https?:\/\//.test(contactValue) && contactValue) {
        url = 'https://' + contactValue
    } else {
        url = contactValue
    }
    return <div className={s.contact}>{contactTitle} - <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    </div>

}

export default ProfileInfo;
