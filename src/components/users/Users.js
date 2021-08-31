import {User} from "../user/User";

import './Users.css';


export function Users({users}) {
    return (
        <div className={'users'}>
            {
                users.map(item => <User user={item} key={item.id}/>)
            }
        </div>
    );
}
