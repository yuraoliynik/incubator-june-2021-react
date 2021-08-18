import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";

import './App.css';

export default function App() {
    return (
        <Router>
            <div className={'links'}>
                <div>
                    <div>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div>
                        <Link to={'/users-page'}>Users info</Link>
                    </div>

                    <div>
                        <Link to={'/posts-page'}>Posts info</Link>
                    </div>

                    <div>
                        <Link to={'/comments-page'}>Comments info</Link>
                    </div>
                </div>
            </div>

            <div>
                <Route exact path={'/'}>
                    <h2>HOME</h2>
                </Route>

                <Route path={'/users-page'}>
                    <Users obj={{a: 1, b: 2}}/>
                </Route>

                <Route path={'/posts-page'} component={Posts}/>

                <Route path={'/comments-page'} render={
                    (props) => {
                        // console.log(props);
                        return <Comments/>;
                    }}/>
            </div>
        </Router>
    );
}