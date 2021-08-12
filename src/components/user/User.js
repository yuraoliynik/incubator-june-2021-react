import './User.css';

export function User({user}) {
    // const {id} = user||[];
    return(
        <div className={'user'}>
            <h3>USER:</h3>
            <div className={'object-wrap'}>
                <p>Id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address:</p>
                <div className={'object-wrap'}>
                    <p>City: {user.address.city}</p>
                    <p>Street: {user.address.street}</p>
                    <p>Suite: {user.address.suite}</p>
                    <p>Zipcode: {user.address.zipcode}</p>
                    <p>Geo:</p>
                    <div className={'object-wrap'}>
                        <p>lat: {user.address.geo.lat}</p>
                        <p>lng: {user.address.geo.lng}</p>

                    </div>
                </div>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company:</p>
                <div className={'object-wrap'}>
                    <p>Name: {user.company.name}</p>
                    <p>Catch phrase: {user.company.catchPhrase}</p>
                    <p>bs: {user.company.bs}</p>
                </div>
            </div>
        </div>
    );
}