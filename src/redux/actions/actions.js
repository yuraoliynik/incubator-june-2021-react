import {INSERT_USERS, ADD_USER} from "./actionTypes";

const actionInsertLoadUsers = (payload) => {
    return {type: INSERT_USERS, payload};
}

const actionAddUser = (payload) => {
    return {type: ADD_USER, payload};
}

export {actionInsertLoadUsers, actionAddUser};