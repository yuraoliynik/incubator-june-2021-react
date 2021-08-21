import './PostDetail.css';

export function PostDetail(props) {
    const {location: {state: post}} = props;

    return(
        <div className={'post-object-wrap'}>
            <h4>POST: {post.id}</h4>
            <div className={'post-object-wrap'}>
                <p>User id: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
        </div>
    );
}