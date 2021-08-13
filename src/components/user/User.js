import './User.css';

export function User({item, chooseUser}) {

    const onClickShowUserPosts = () => {
        chooseUser(item);
    }

    return (
        <div className={'user'}>
            <div>
                <h3>User id: {item.id}</h3>
                <p>Name: {item.name}</p>
                <p>User name: {item.username}</p>
                <p>Email: {item.email}</p>
                <p>Address:</p>
                <div className={'object-wrap'}>
                    <p>City: {item.address.city}</p>
                    <p>Street: {item.address.street}</p>
                    <p>Suite: {item.address.suite}</p>
                    <p>Zipcode: {item.address.zipcode}</p>
                    <p>Geo:</p>
                    <div className={'object-wrap'}>
                        <p>lat: {item.address.geo.lat}</p>
                        <p>lng: {item.address.geo.lng}</p>
                    </div>
                </div>
                <p>Phone: {item.phone}</p>
                <p>Website: {item.website}</p>
                <p>Company:</p>
                <div className={'object-wrap'}>
                    <p>Name: {item.company.name}</p>
                    <p>Catch phrase: {item.company.catchPhrase}</p>
                    <p>bs: {item.company.bs}</p>
                </div>
            </div>

            <button onClick={onClickShowUserPosts}>Show user posts</button>
        </div>

    );
}