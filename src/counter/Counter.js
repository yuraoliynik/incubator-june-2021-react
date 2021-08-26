import {useReducer} from "react";

import reducer, {initState} from "../reducers/reducer";


export function Counter() {
    const [myState, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h2>myState: {myState.count}</h2>

            <button onClick={() => dispatch({type: '+', playload: 10})}>myState + 10</button>
            <button onClick={() => dispatch({type: '-', playload: 2})}>myState - 2</button>
        </div>
    );
}