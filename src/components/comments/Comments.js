import {useState, useEffect} from "react";
import {getComments} from "../../services/comment.service";
import {Comment} from "../comment/Comment";
import './Comments.css';

export function Comments() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(null);

    const chooseComment = (commentItem) => {
        setComment(commentItem);
    }

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, []);

    return (
        <div className={'comments'}>
            <div className={'comments-wrap'}>
                {
                    comments && comments.map(value =>
                        <Comment
                            item={value}
                            key={value.id}
                            chooseComment={chooseComment}
                        />
                    )
                }
            </div>

            {
                comment && <div className={'comment-wrap'}>
                    <h3>Comment id: {comment.id}</h3>
                    <p>Post id: {comment.postId}</p>
                    <p>Name: {comment.name}</p>
                    <p>Body: {comment.body}</p>
                    <p>Email: {comment.email}</p>
                </div>
            }
        </div>
    );
}