import {useState, useEffect} from "react";
import {getPostComments} from "../../services/post.service";
import {Comment} from "../comment/Comment";
import './Post.css';

export function Post({post}) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getPostComments(post.id).then(({data}) => setComments([...data]));
    }, []);

    return (
        <div className={'post'}>
            <div className={'post-wrap'}>
                <h4>Post id: {post.id}</h4>
                <p>User id: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>

            <div className={'comments'}>
                {
                    comments.map(value => <Comment comment={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}