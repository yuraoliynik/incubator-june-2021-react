import './Users.css'
import {useEffect, useState} from 'react';
import {getUsers} from '../../services/user.service.js';
import {User} from '../user/User.js';

export function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return(
        <div className={'users'}>
            {
                users.map(value => <User user={value} key={value.id}/>)
            }
        </div>
    );
}