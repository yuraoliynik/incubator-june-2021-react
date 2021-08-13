import {useState, useEffect} from "react";
import {getPosts} from "../../services/post.service";
import {Post} from "../post/Post";
import './Posts.css';

export function Posts() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    const choosePost = (postItem) => {
        setPost(postItem);
    }

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={'posts'}>
            <div className={'posts-wrap'}>
                {
                    posts && posts.map(value =>
                        <Post
                            item={value}
                            key={value.id}
                            choosePost={choosePost}
                        />
                    )
                }
            </div>

            {
                post && <div className={'post-wrap'}>
                    <h3>Post id: {post.id}</h3>
                    <p>User id: {post.userId}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </div>
            }
        </div>
    );
}