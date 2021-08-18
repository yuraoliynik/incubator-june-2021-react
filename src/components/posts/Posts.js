import {useEffect, useState} from 'react';
import {getPosts} from '../../services/post.service.js';
import {Post} from '../post/Post.js';

import './Posts.css';
import {User} from "../user/User";

export function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    }, []);

    return (
        <div>
            <h2>POSTS INFO</h2>

            <div className={'posts'}>
                {
                    posts && posts.map(value => <Post post={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}