import './User.css';

export function User({item, goToUserDetail}) {
    return (
        <div className={'user'}>
            <div>
                <p>{item.id} :</p>
                <p>{item.name}</p>
            </div>
            <button onClick={() => goToUserDetail(item.id)}>User detail info</button>
        </div>
    );
}