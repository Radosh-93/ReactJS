import { combineReducers, createStore } from "redux";
import taskReducer from './tasks-reducer'

let reducers = combineReducers({
	tasksPage: taskReducer
});
let store = createStore(reducers);

window.store = store;

export default store;