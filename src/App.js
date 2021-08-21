import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    withRouter
} from "react-router-dom";

import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";

import './App.css';

export default function App() {
    return (
        <Router>
            <div className={'links'}>
                <div>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/posts'}>Posts</Link>
                </div>
            </div>

            <div>
                <Route exact path={'/'}>
                    <h2>Home</h2>
                </Route>

                <Route path={'/users'} component={Users}/>

                <Route path={'/posts'} component={Posts}/>
            </div>
        </Router>
    );
}