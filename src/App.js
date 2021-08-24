import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";

import {Cars} from "./componenets/cars/Cars";

import {CarAddForm} from "./componenets/carAddForm/CarAddForm";
import {CarUpdateInfo} from "./componenets/carUpdateInfo/CarUpdateInfo";

import {IPSelect} from "./componenets/ipSelect/IPSelect";

import {useState} from "react";

import './App.css';


export default function App() {
    const [ip, setIP] = useState('');

    return (
        <Router>
            <div className={'app'}>
                <div className={'app-header'}>
                    <div className={'app-links'}>
                        <Link to={'/'}>About</Link>
                        <Link to={'/cars'}>All cars info</Link>
                        <Link to={'/create-car'}>Add new car info</Link>
                        <Link to={'/update-car'}>Update car info</Link>
                    </div>

                    <IPSelect setIP={setIP}/>
                </div>

                <div className={'app-data'}>
                    <Route exact path={'/'}>
                        <h2>This site is an example of how the API works and REACT and js and other</h2>
                    </Route>

                    <Route path={'/cars'}>
                        <h2>Cars info</h2>
                        <Cars ip={ip}/>
                    </Route>

                    <Route path={'/create-car'}>
                        <h2>Add new car info</h2>
                        <CarAddForm ip={ip}/>
                    </Route>

                    <Route path={'/update-car'}>
                        <h2>Update car info</h2>
                        <CarUpdateInfo ip={ip}/>
                    </Route>
                </div>
            </div>
        </Router>
    );
}