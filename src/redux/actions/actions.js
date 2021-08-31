import {ADD_TODO, DELETE_TODO, UPDATE_TODO, CHANGE_INPUT} from "./actionTypes";

const actionAddTODO = (todoStr) => {
    return {type: ADD_TODO, payload: todoStr};
}

const actionDeleteTODO = (index) => {
    return {type: DELETE_TODO, payload: index};
}

const actionUpdateTODO = (index, todoStr) => {
    return {type: UPDATE_TODO, payload: {index, todoStr}};
}


const actionChangeInput = (todoStr) => {
    return {type: CHANGE_INPUT, payload: todoStr};
}

export {
    actionAddTODO,
    actionDeleteTODO,
    actionUpdateTODO,

    actionChangeInput
}