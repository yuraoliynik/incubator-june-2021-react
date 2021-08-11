import './Comments.css'
import {useEffect, useState} from 'react';
import {getComments, getComment} from '../../services/comment.service.js';
import {Comment} from '../comment/Comment.js';

export function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, []);

    // let [comment, setComment] = useState({});
    //
    // useEffect(() => {
    //     getComment(366).then(value => setComment(value))
    // }, []);
    //
    // console.log(comment);

    return(
        <div className={'comments'}>
            {
                comments.map(value => <Comment comment={value} key={value.id}/>)
            }
        </div>
    );
}