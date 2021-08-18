import {useState, useEffect} from "react";
import {getUsers} from "../../services/user.service";
import {User} from "../user/User";

import './Users.css';

export function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div>
            <h2>USER INFO</h2>

            <div className={'users'}>
                {
                    users && users.map(value => <User user={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}