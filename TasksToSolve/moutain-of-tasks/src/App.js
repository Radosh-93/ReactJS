import React from 'react';
import './App.css';
import TasksContainer from "./components/Tasks/TasksContainer";
import {NavLink, Route, Switch} from "react-router-dom";
import RecipeApp from "./components/RecipeApp/RecipeApp";
import FortniteShop from "./components/FortniteShop/FortniteShop";

function App() {
    return (
        <div className="App">
            <NavLink className={'btn'} to={'/tasks'}>Resolved tasks</NavLink>
            <NavLink className={'btn'} to={'/recipe'}>Recipe App</NavLink>
            <NavLink className={'btn'} to={'/fortnite'}>Fortnite Shop</NavLink>
            <Switch>
                <Route path={'/tasks'} render={() => <TasksContainer/>}/>
                <Route path={'/recipe'} render={() => <RecipeApp/>}/>
                <Route path={'/fortnite'} render={() => <FortniteShop/>}/>
            </Switch>

        </div>
    );
}

export default App;