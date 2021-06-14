import React, {ChangeEvent, FC, useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import avaPlaceholder from '../../../assets/images/avatar-placeholder.png'
import ProfileDataForm from "./ProfileDataForm";
import {ProfileT} from "../../../Types/types";

type PropsType = {
    profile: ProfileT | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveAvatarPhoto: (photo: File) => void
    saveProfile: (profile: ProfileT) => Promise<any>

}

const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, saveAvatarPhoto, saveProfile}) => {

        let [editMode, setEditMode] = useState(false)

        if (!profile) {
            return <Preloader/>
        }

        const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) {
                saveAvatarPhoto(e.target.files[0])
            }
        }

        const onSubmit = (formData: any) => {
            console.log(formData)
            saveProfile(formData) //решение не канон, т.к. ждем ответа из БЛ
                .then(() => {
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

type ProfileDataPropsType = {
    profile: ProfileT
    isOwner: boolean
    goToEditMode: () => void

}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
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

type ContactsPropstype = {
    contactTitle: string
    contactValue: string
}
export const Contacts: FC<ContactsPropstype> = ({contactTitle, contactValue}) => {
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
