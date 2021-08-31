export function User({user}) {

    return (
        <div className={'user'}>
            <p>{user.id} {user.name}</p>
        </div>
    );
}