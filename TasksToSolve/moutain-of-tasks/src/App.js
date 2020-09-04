import React from 'react';
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import TasksContainer from "./Apps/Tasks/components/TasksContainer";
import RecipeApp from "./Apps/RecipeApp/RecipeApp";
import FortniteShop from "./Apps/FortniteShop/components/FortniteShop";
import MovieApp from "./Apps/MovieApp/MovieApp";
import TodoApp from "./Apps/TodoApp/TodoMain";

function App() {
    return (
        <div className="App">
            <div className={'main-nav'}>
                <NavLink className={'btn'} to={'/tasks'}>Resolved tasks</NavLink>
                <NavLink className={'btn'} to={'/recipe'}>Recipe App</NavLink>
                <NavLink className={'btn'} to={'/fortnite'}>Fortnite Shop</NavLink>
                <NavLink className={'btn'} to={'/movies'}>Movie App</NavLink>
                <NavLink className={'btn'} to={'/todo'}>ToDo App</NavLink>
            </div>
            <Switch>
                <Route path={'/tasks'} render={() => <TasksContainer/>}/>
                <Route path={'/recipe'} render={() => <RecipeApp/>}/>
                <Route path={'/fortnite'} render={() => <FortniteShop/>}/>
                <Route path={'/movies'} render={() => <MovieApp/>}/>
                <Route path={'/todo'} render={() => <TodoApp/>}/>
            </Switch>

        </div>
    );
}

export default App;