import {createStore} from "redux";
import {reducer} from "../redusers";

import {applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;