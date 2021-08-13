import './Comment.css';

export  function Comment({item, chooseComment}) {

    function onClickShowComment() {
        chooseComment(item);
    }

    return (
        <div className={'comment'}>
            <p>Comment id: {item.id}</p>
            <p>Name: {item.name}</p>
            <button onClick={onClickShowComment}>Show comment</button>
        </div>
    );
}