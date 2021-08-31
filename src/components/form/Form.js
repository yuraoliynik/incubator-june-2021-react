import {useState} from "react";
import {addUser, addUserThunk, addUserWithDispatch} from "../../services/user.services";

import './Form.css';


export function Form({saveUser, getUsers}) {
    const [formState, setFormState] = useState({name: 'name'});

    const changeNameInput = ({target: {name, value}}) => {
        setFormState({...formState, [name]: value});
    };

    const clickButtonAddUser = (event) => {
        event.preventDefault();

        const {target: {value}} = event;
        saveUser(formState, value);
    };

    const clickButtonGetUsers = (event) => {
        event.preventDefault();

        const {target: {value}} = event;
        getUsers(value);
    };

    return (
        <form className={'form'}>
            <div className={'form-wrap'}>
                <input type="text" name={'name'} value={formState.name} onChange={changeNameInput}/>
                <div className={'buttons'}>
                    <div className={'buttons-block'}>
                        <button value={'11'} onClick={clickButtonAddUser}>Save user with "addUser" and "dispatch"</button>
                        <button value={'12'} onClick={clickButtonAddUser}>Save user with "addUserWithDispatch"</button>
                        <button value={'13'} onClick={clickButtonAddUser}>Save user with "addUserThunk"</button>
                    </div>

                    <div className={'buttons-block'}>
                        <button value={'21'} onClick={clickButtonGetUsers}>Get user with "loadUsers" and "dispatch"</button>
                        <button value={'22'} onClick={clickButtonGetUsers}>Get user with "loadUsersWithDispatch"</button>
                        <button value={'23'} onClick={clickButtonGetUsers}>Get user with "loadUsersThunk"</button>
                    </div>
                </div>
            </div>
        </form>
    );
}