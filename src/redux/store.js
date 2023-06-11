import {  combineReducers, legacy_createStore } from "redux";
import callsReducer from "./callsReducer";
import navbarReducer from "./navbarReducer";
import profileReducer from "./profileReducer";


let redusers = combineReducers({
    calls: callsReducer,
    nav: navbarReducer,
    profile:profileReducer,
})



let store = legacy_createStore(redusers);


export default store;