import './UserDetail.css';

export function UserDetail({user}) {
    return(
        <div className={'user-object-wrap'}>
            <h4>USER: {user.id}</h4>
            <div className={'user-object-wrap'}>
                <p>Name: {user.name}</p>
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address:</p>
                <div className={'user-object-wrap'}>
                    <p>City: {user.address.city}</p>
                    <p>Street: {user.address.street}</p>
                    <p>Suite: {user.address.suite}</p>
                    <p>Zipcode: {user.address.zipcode}</p>
                    <p>Geo:</p>
                    <div className={'user-object-wrap'}>
                        <p>lat: {user.address.geo.lat}</p>
                        <p>lng: {user.address.geo.lng}</p>

                    </div>
                </div>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company:</p>
                <div className={'user-object-wrap'}>
                    <p>Name: {user.company.name}</p>
                    <p>Catch phrase: {user.company.catchPhrase}</p>
                    <p>bs: {user.company.bs}</p>
                </div>
            </div>
        </div>
    );
}