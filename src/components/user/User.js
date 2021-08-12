import {useState, useEffect} from "react";
import {getUserPosts} from "../../services/user.service";
import {Post} from "../post/Post";
import './User.css';

export function User({user}) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserPosts(user.id).then(({data}) => setPosts([...data]));
    }, []);

    return (
        <div className={'user'}>
            <div className={'user-wrap'}>
                <div>
                    <h3>User id: {user.id}</h3>
                    <p>Name: {user.name}</p>
                    <p>User name: {user.username}</p>
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

            <div className={'posts'}>
                {
                    posts.map(value => <Post post={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}