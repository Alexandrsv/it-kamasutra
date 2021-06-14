import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {PostT} from "../../../Types/types";

export type MapPropsType = {
    posts: Array<PostT>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: FC<MapPropsType & DispatchPropsType> = React.memo((props) => {

    let onAddPost = (formData: { newPostBody: string }) => {
        props.addPost(formData.newPostBody)
    }
    console.log('RENDER')
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
})

const maxLength = maxLengthCreator(10)

type AddPostFormValuesType = {
    newPostBody: string
}


const AddNewPostForm: FC<InjectedFormProps<AddPostFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'New post text'}
                    type="text" name={'newPostBody'}
                    component={Textarea}
                    validate={[required, maxLength]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm<AddPostFormValuesType>({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)


export default MyPosts;
