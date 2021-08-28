export function User({user, updateUser}) {
    const onClickUpdateButton = () => {
        updateUser(user);
    };

    return (
        <div className={'user'}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>

            <button onClick={onClickUpdateButton}>Update</button>
        </div>
    );
}