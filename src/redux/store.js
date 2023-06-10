import {  combineReducers, legacy_createStore } from "redux";
import callsReducer from "./callsReducer";
import navbarReducer from "./navbarReducer";


let redusers = combineReducers({
    calls: callsReducer,
    nav: navbarReducer,
})



let store = legacy_createStore(redusers);


export default store;