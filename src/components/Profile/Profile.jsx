import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    console.log('Profile PROPS', props)
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    );
};

export default Profile;
