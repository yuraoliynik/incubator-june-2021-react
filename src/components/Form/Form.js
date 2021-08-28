import {useState} from "react";

import './Form.css';


export function Form({formState, setFormState, addUser, clearUsers, getUsers}) {

    const {name, username, phone, email} = formState;

    const saveInputChange = ({target: {value, name}}) => {
        setFormState({...formState, [name]: value});
    };

    const onClickAddButton = (event) => {
        event.preventDefault();
        addUser(formState);
    };

    const onClickClearButton = (event) => {
        event.preventDefault();
        clearUsers();
    };

    const onClickGetButton = (event) => {
        event.preventDefault();
        getUsers();
    };

    return (
        <form className={'form'}>
            <div className={'form-wrap'}>
                <div className={'addUser'}>
                    <div className={'addUser-inputs'}>
                        <input type={'text'} name={'name'} value={name} onChange={saveInputChange}/>
                        <input type={'text'} name={'username'} value={username} onChange={saveInputChange}/>
                        <input type={'text'} name={'phone'} value={phone} onChange={saveInputChange}/>
                        <input type={'text'} name={'email'} value={email} onChange={saveInputChange}/>
                    </div>

                    <div className={'addUser-button'}>
                        <input type={'button'} value={'Add new user'} onClick={onClickAddButton}/>
                    </div>
                </div>

                <div className={'clearUsers-button'}>
                    <button onClick={onClickClearButton}>Clear "users"</button>
                </div>

                <div className={'getUsers-button'}>
                    <button onClick={onClickGetButton}>Get "users"</button>
                </div>
            </div>
        </form>
    );
}