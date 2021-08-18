import './Comment.css';

export function Comment({comment}) {
    return(
        <div className={'comment'}>
            <h3>COMMENT:</h3>
            <div className={'object-wrap'}>
                <p>Id: {comment.id}</p>
                <p>Post id: {comment.postId}</p>
                <p>Name: {comment.name}</p>
                <p>Body: {comment.body}</p>
                <p>Email: {comment.email}</p>
            </div>
        </div>
    );
}