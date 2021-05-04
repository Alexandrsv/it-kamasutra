import s from './Post.module.css';

const Post = () => {
    return (

        <div className={s.item}>
            <img src={`https://i.pravatar.cc/80?img=${Math.floor(Math.random() * 50)}`} alt={'ava'}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>

    );
}

export default Post;
