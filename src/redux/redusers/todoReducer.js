import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from "../actions";

const initialState = {
    todoList: []
};


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };

        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter((item, index) => index !== action.payload)
            };

        case UPDATE_TODO:
            state.todoList[action.payload.index] = action.payload.todoStr;
            return {
                ...state,
                todoList: [...state.todoList]
            };

        default:
            return state;
    }
};
