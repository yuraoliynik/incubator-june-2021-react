import {useEffect, useState} from 'react';
import {getComments} from "../../services/comment.service";
import {Comment} from '../comment/Comment.js';

import './Comments.css';
import {Post} from "../post/Post";

export function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(({data}) => setComments([...data]));
    }, []);

    return(
        <div>
            <h2>COMMENTS INFO</h2>

            <div className={'comments'}>
                {
                    comments && comments.map(value => <Comment comment={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}