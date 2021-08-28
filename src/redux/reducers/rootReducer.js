import {INSERT_USERS, CLEAR_USERS, ADD_USER, UPDATE_USER} from "../actions";

const initialState = {
    users: []
};

export const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case INSERT_USERS:
            return {...state, users: [...payload]};

        case CLEAR_USERS:
            return {...state, users: []};

        case ADD_USER:
            return {...state, users: [...state.users, payload]};

        case UPDATE_USER:
            state.users.forEach((item, index) => {
                if (item.id === payload.id) {
                    state.users[index] = {...payload}
                }
            });
            return {...state, users: [...state.users]};

        default:
            return state;
    }
};