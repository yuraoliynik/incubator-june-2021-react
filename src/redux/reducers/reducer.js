import {INSERT_USERS, ADD_USER} from "../actions";

const initialState = {
    users: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INSERT_USERS:
            return {...state, users: [...action.payload]};

        case ADD_USER:
            return {...state, users: [...state.users, action.payload]};

        default:
            return state;
    }
};

