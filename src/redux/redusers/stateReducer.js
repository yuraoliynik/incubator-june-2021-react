import {CHANGE_INPUT} from "../actions";

const initialState = {
    todoStr: 'todo text'
};

export const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {...state, todoStr: action.payload};

        default:
            return state;
    }
};

