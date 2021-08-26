import reducer, {initState} from "../../reducers/reducer";

import {useReducer} from "react";


export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <div>
                <h2>a: {state.a}</h2>
                <button onClick={() => dispatch({property: 'a', type: '+', playloud: 1})}>+</button>
                <button onClick={() => dispatch({property: 'a',type: '-', playloud: 1})}>-</button>
            </div>

            <div>
                <h2>b: {state.b}</h2>
                <button onClick={() => dispatch({property: 'b', type: '+', playloud: 1})}>+</button>
                <button onClick={() => dispatch({property: 'b', type: '-', playloud: 1})}>-</button>
            </div>

            <div>
                <h2>c: {state.c}</h2>
                <button onClick={() => dispatch({property: 'c', type: '+', playloud: 1})}>+</button>
                <button onClick={() => dispatch({property: 'c', type: '-', playloud: 1})}>-</button>
            </div>
        </div>
    );
}