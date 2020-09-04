import {combineReducers, compose, createStore} from "redux";
import taskReducer from './tasks-reducer'
import todoListReducer from "./todoList-reducer";

let reducers = combineReducers({
	tasksPage: taskReducer,
	todoListApp: todoListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers());

window.store = store;

export default store;