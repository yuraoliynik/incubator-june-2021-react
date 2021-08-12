import './Comment.css';

export function Comment({comment}) {
    return (
        <div className={'comment'}>
            <h5>Comment id: {comment.id}</h5>
            <p>Post id: {comment.postId}</p>
            <p>Name: {comment.name}</p>
            <p>Body: {comment.body}</p>
            <p>Email: {comment.email}</p>
        </div>
    );
}