import './Posts.css'
import {useEffect, useState} from 'react';
import {getPosts} from '../../services/post.service.js';
import {Post} from '../post/Post.js';

export function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return(
        <div className={'posts'}>
            {
                posts.map(value => <Post post={value} key={value.id}/>)
            }
        </div>
    );
}