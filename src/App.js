import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {axiosAddUser, axiosGetUsers, axiosUpdateUser} from "./services/user.servise";
import {actionAddUser, actionClearUsers, actionInsertUsers, actionUpdateUser} from "./redux/actions";

import {Form} from "./components/Form/Form";
import {Users} from "./components/users/Users";

import './App.css';


export default function App() {
    const [formState, setFormState] = useState({
        name: 'Name',
        username: 'User name',
        phone: 'Phone',
        email: 'Email'
    });

    const users = useSelector(({rootReducer: {users}}) => users);
    const dispatch = useDispatch();

    useEffect(() => {
        axiosGetUsers().then(({data}) => {
            dispatch(actionInsertUsers(data));
        });
    }, []);

    const addUser = (userNotFullObj) => {
        axiosAddUser(userNotFullObj).then(({data}) => {
            console.log(data);
            dispatch(actionAddUser(data));
        })
    };

    const clearUsers = () => {
        dispatch(actionClearUsers());
    };

    const getUsers = () => {
        axiosGetUsers().then(({data}) => {
            dispatch(actionInsertUsers(data));
        });
    };

    const updateUser = (userObj) => {
        userObj = {...userObj, ...formState};

        axiosUpdateUser(userObj).then(({data}) => {
            console.log(data);
            dispatch(actionUpdateUser(data));
        });
    };

    return (
        <div className={'app'}>
            <Form
                formState={formState}
                setFormState={setFormState}
                addUser={addUser}
                clearUsers={clearUsers}
                getUsers={getUsers} />

            <Users users={users} updateUser={updateUser} />
        </div>
    );
}