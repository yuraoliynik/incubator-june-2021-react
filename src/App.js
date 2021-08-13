import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";
import './App.css';

export default function App() {
    return (
        <div className={'app'}>
            <Posts/>
            <Comments/>
        </div>
    );
}