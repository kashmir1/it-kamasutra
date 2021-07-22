import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogReducer,
   sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
