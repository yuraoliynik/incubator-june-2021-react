import './Post.css';

export function Post({post}) {
    return(
        <div className={'post'}>
            <h3>POST:</h3>
            <div className={'object-wrap'}>
                <p>Id: {post.id}</p>
                <p>User id: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
        </div>
    );
}