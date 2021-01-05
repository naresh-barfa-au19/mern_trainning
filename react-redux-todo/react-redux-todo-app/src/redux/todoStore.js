import { createStore } from "redux";
import submitReducer from "./submitReducer"
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(submitReducer, composeWithDevTools())


export default store 