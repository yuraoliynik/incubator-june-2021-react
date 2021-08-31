import {createStore, applyMiddleware} from "redux";
import {reducer} from "../reducers/reducer";
import ReduxThunk from "redux-thunk";


export const store = createStore(reducer, applyMiddleware(ReduxThunk));