import './App.css'
import {Users} from "./components/users/Users.js";
import {Posts} from "./components/posts/Posts.js";
import {Comments} from "./components/comments/Comments.js";

export default function App() {
    return (
    <div className={'app'}>
        <h2>USERS</h2>
        <Users/>

        <h2>POSTS</h2>
        <Posts/>

        <h2>COMMENTS</h2>
        <Comments/>
    </div>
  );
}