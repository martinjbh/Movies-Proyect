import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'



export const store = createStore(
    Reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

