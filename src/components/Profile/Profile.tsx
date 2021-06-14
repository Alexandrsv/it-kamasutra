import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileT} from "../../Types/types";

type PropsType = {
    profile: ProfileT | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveAvatarPhoto: (file: File) => void
    saveProfile: (profile: ProfileT) => Promise<any>

}

const Profile: FC<PropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         saveAvatarPhoto={props.saveAvatarPhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
