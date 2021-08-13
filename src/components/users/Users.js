import {useState, useEffect} from "react";
import {getUsers, getUserPosts} from "../../services/user.fetch";
import {User} from "../user/User";
import {Post} from "../post/Post";
import './Users.css';

export function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

    const chooseUser = (userItem) => {
        console.log(userItem.id);
        setUser(userItem);
    }

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    useEffect(() => {
        getUserPosts(user.id).then(value => setPosts([...value]));
    }, [user]);

    return (
        <div className={'users'}>
            <div className={'users-wrap'}>
                {
                    users && users.map(value =>
                        <User item={value}
                              chooseUser={chooseUser}
                              key={value.id}
                        />
                    )
                }
            </div>

            <div className={'posts-wrap'}>
                {
                    posts && posts.map(value =>
                        <Post
                            item={value}
                            key={value.id}
                        />
                    )
                }
            </div>
        </div>
    );
}