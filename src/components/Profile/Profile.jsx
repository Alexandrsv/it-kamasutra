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
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;
