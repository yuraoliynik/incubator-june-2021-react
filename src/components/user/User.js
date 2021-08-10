import {Address} from '../address/Address.js';
import {Company} from '../company/Company.js';
import './User.css';


export  function User(props) {
    let {id, name, username, email, address, phone, website, company} = props.user;

    return(
        <div className={'user'}>
            <p>User:</p>

            <div className={'value'}>
                <div className={'value-wrap'}>
                    <p>Id: {id}</p>
                    <p>Name: {name}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <Address address={address}/>
                    <p>Phone: {phone}</p>
                    <p>Website: {website}</p>
                    <Company company={company}/>
                </div>
            </div>
        </div>
    );
}