import {Link} from "react-router-dom";

import './Post.css';

export function Post({item, url}) {
    return (
        <div className={'post'}>
            <div>
                <p>{item.id} :</p>
                <p>{item.title}</p>
            </div>
            <Link to={{pathname: `${url}/${item.id}`, state: item}}>Post detail info</Link>
        </div>
    );
}