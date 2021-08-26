import {Form} from "./components/form/Form";
import {List} from "./components/list/List";

import {useReducer} from "react";
import reducer, {initState} from "./reducers/reducer";

import './App.css';


export default function App() {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <Form dispatch={dispatch}/>

            <List list={state} dispatch={dispatch}/>
        </div>
    );
}