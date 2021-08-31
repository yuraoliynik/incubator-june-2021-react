import {stateReducer} from "./stateReducer";
import {todoReducer} from "./todoReducer";

import {combineReducers} from 'redux';

export const reducer = combineReducers({stateReducer, todoReducer});