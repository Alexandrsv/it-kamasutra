import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let onAddPost = (formData) => {
        props.addPost(formData.newPostBody)
    }

    return (
        <div className={s.posts_block}>
            <h2>My posts</h2>
            <div>
                <div>
                    <AddNewPostReduxForm onSubmit={onAddPost}/>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map((el) => <Post id={el.id} key={el.id} message={el.message}
                                               like_count={el.like_count}/>)}
            </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'New post text'} type="text" name={'newPostBody'} component={'textarea'}/></div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)


export default MyPosts;
