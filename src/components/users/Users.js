import {User} from "../user/User";

import './Users.css';


export function Users({users, updateUser, index}) {
    return (
        <div className={'users'}>
            {
                users.map((item, index) => <User
                    user={item}
                    key={item.id}
                    updateUser={updateUser}
                />)
            }
        </div>
    );
}