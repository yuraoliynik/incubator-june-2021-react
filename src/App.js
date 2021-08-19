import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import {Cars} from "./components/cars/Cars";

import './App.css';

export default function App() {
    return (
        <Router>
            <div className={'links'}>
                <Link to={'/'}>Home</Link>

                <Link to={'/cars-name-length-odd'}>Cars ODD number model name</Link>

                <Link to={'/cars-name-length-even'}>Cars EVEN number model name</Link>
            </div>

            <div className={'app'}>
                <Route exact path={'/'}>
                    <h2>Home</h2>
                </Route>

                <Route path={'/cars-name-length-odd'}>
                    <h2>Cars with an ODD number of characters in the model name</h2>
                    <Cars myKey={'odd'}/>
                </Route>

                <Route path={'/cars-name-length-even'}>
                    <h2>Cars with an EVEN number of characters in the model name</h2>
                    <Cars myKey={'even'}/>
                </Route>
            </div>
        </Router>
    );
}