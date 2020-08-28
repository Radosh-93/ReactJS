import React from 'react';
import './App.css';
import TasksContainer from "./components/Tasks/TasksContainer";
import {NavLink, Route} from "react-router-dom";
import ResolveC from "./components/Tasks/ResolveC";

function App() {
    return (
        <div className="App">
            <NavLink to={'/tasks'} style={{display: 'block'}}>Tasks</NavLink>
            <NavLink to={'/test'}>Test</NavLink>
            <Route path={'/tasks'} render={() => <TasksContainer/>}/>
            <Route path={'/test'} render={() => <ResolveC/>}/>
        </div>
    );
}

export default App;
