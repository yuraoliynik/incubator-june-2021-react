import {useEffect, useState} from "react";
import {Route} from "react-router";

import {getUsers, getUser} from "../../services/user.service";

import {User} from "../user/User";
import {UserDetail} from "../userDetail/UserDetail";

import './Users.css';

export function Users(props) {
    const {match: {url}, history} = props;

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data));
    }, []);

    useEffect(() => {
        userId && getUser(userId).then(({data}) => setUser(data));
    }, [userId]);

    const goToUserDetail = (id) => {
        history.push(`${url}/${id}`);
    };

    return (
        <div className={'users'}>
            <div>
                <h3>Users</h3>
                {
                    users && users.map(item => <User item={item} key={item.id} goToUserDetail={goToUserDetail}/>)
                }
            </div>

            <div>
                <h3>User detail info</h3>
                <Route path={`${url}/:id`} render={(props) => {
                    const {match: {params: {id}}} = props;

                    setUserId(id);

                    return user && <UserDetail user={user}/>
                }}/>
            </div>
        </div>
    );
}