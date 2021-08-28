import {rootReducer} from "./rootReducer";
import {newReducer} from "./newReducer";

import {combineReducers} from 'redux';


export const reducer = combineReducers({rootReducer, newReducer});