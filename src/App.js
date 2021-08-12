import {User} from './components/user/User';
import {useEffect, useState} from "react";
import {getUsers} from "./services/user.service";
import './App.css';

export default function App() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    }, []);

    return (
        <div className={'app'}>
            {
                users.map(value => <User user={value} key={value.id}/>)
            }
        </div>
  );
}