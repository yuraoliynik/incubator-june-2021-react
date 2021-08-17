import { createStore } from 'redux'

const initialState = {
    counter: 0
};

export const reducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case 'INC':
            return {...state, counter: state.counter + 1};
        default:
            return state;
    }
}

export let store = createStore(reducer);