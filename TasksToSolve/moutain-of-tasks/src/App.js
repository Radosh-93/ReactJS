import React from 'react';
import './App.css';
import TasksContainer from "./components/Tasks/TasksContainer";
import {NavLink, Route} from "react-router-dom";
import RecipeApp from "./components/RecipeApp/RecipeApp";

function App() {
    return (
        <div className="App">
            <NavLink className={'btn'} to={'/tasks'}>Resolved tasks</NavLink>
            <NavLink className={'btn'} to={'/recipe'}>Recipe App</NavLink>
            <Route path={'/tasks'} render={() => <TasksContainer/>}/>
            <Route path={'/recipe'} render={() => <RecipeApp/>}/>

        </div>
    );
}

export default App;