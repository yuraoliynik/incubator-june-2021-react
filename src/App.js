import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    loadUsers,
    loadUsersWithDispatch,
    loadUsersThunk,

    addUser,
    addUserWithDispatch,
    addUserThunk,
} from "./services/user.services";
import {actionAddUser, actionInsertLoadUsers} from "./redux/actions/actions";
import {Users} from "./components/users/Users";
import {Form} from "./components/form/Form";

import './App.css';


export default function App() {
    const users = useSelector(({users}) => users);
    const dispatch = useDispatch();

    useEffect(() => {
        loadUsers().then(value => dispatch(actionInsertLoadUsers(value)));

        // loadUsersWithDispatch(dispatch);

        // dispatch(loadUsersThunk());
    }, []);

    const saveUser = (userDataObj, buttonKey) => {
        switch (buttonKey) {
            case '11':
                addUser(userDataObj).then(value => dispatch(actionAddUser(value)));
                console.log('Saved user with "addUser" and "dispatch"');
                return;

            case '12':
                addUserWithDispatch(dispatch, userDataObj);
                console.log('Saved user with "addUserWithDispatch"');
                return;

            case '13':
                dispatch(addUserThunk(userDataObj));
                console.log('Saved user with "addUserThunk"');
                return;

            default:
                return;
        }
    }


    const getUsers = (buttonKey) => {
        switch (buttonKey) {
            case '21':
                loadUsers().then(value => dispatch(actionInsertLoadUsers(value)));
                console.log('Get users with "addUser" and "dispatch"');
                return;

            case '22':
                loadUsersWithDispatch(dispatch);
                console.log('Get users with "loadUsersWithDispatch"');
                return;

            case '23':
                dispatch(loadUsersThunk());
                console.log('Get users with "loadUsersThunk"');
                return;

            default:
                return;
        }
    }

    return (
        <div>
            <Form saveUser={saveUser} getUsers={getUsers}/>
            <Users users={users}/>
        </div>
    );
}