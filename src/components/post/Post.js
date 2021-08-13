import './Post.css';

export function Post({item}) {
    return (
        <div className={'post'}>
            <h3>Post id: {item.id}</h3>
            <p>User Id: {item.userId}</p>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
        </div>
    );
}