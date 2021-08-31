import {actionAddUser, actionInsertLoadUsers} from "../redux/actions/actions";

const url = 'https://jsonplaceholder.typicode.com/users';


const loadUsers = () => {
    return fetch(url)
        .then(value => value.json())
        .then(value => {
            console.log(value);
            return value;
        });
};

const loadUsersWithDispatch = (dispatch) => {
    fetch(url)
        .then(value => value.json())
        .then(value => {
            dispatch(actionInsertLoadUsers(value));
            console.log(value);
        });
};

const loadUsersThunk = () => async (dispatch) => {
    const response = await (await fetch(url)).json();
    dispatch(actionInsertLoadUsers(response));
    console.log(response);
};


const addUser = (userDataObj) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(userDataObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(value => value.json())
        .then(value => {
            console.log(value);
            return value;
        });
};

const addUserWithDispatch = async (dispatch, userDataObj) => {
    const newUser = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userDataObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(value => value.json());

    console.log(newUser);

    dispatch(actionAddUser(newUser));
};


const addUserThunk = (userDataObj) => async (dispatch) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userDataObj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    const newUser = await response.json();
    console.log(newUser);

    dispatch(actionAddUser(newUser));
};


export {
    loadUsers,
    loadUsersWithDispatch,
    loadUsersThunk,

    addUser,
    addUserWithDispatch,
    addUserThunk
};