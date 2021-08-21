import {useEffect, useState} from "react";
import {Route} from "react-router";

import {getPosts} from "../../services/post.services";

import {Post} from "../post/Post";
import {PostDetail} from "../postDetail/PostDetail";

import './Posts.css';

export function Posts(props) {
    const {match: {url}} = props;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={'posts'}>
            <div>
                <h3>Posts</h3>
                {
                    posts && posts.map(item => <Post item={item} key={item.id} url={url}/>)
                }
            </div>

            <div>
                <h3>Post detail info</h3>
                <Route path={`${url}/:id`} component={PostDetail}/>
            </div>
        </div>
    );
}