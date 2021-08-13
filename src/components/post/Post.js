import './Post.css';

export  function Post({item, choosePost}) {

    function onClickShowPost() {
        choosePost(item);
    }

    return (
        <div className={'post'}>
            <p>Post id: {item.id}</p>
            <p>Title: {item.title}</p>
            <button onClick={onClickShowPost}>Show post</button>
        </div>
    );
}