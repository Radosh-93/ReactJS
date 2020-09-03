import React from "react";
import MovieList from "./components/MovieList";
import style from './MovieApp.module.css'
import NavMovie from "./components/NavMovie";
import {MovieProvider} from "./Store/MovieContext";
import FormMovie from "./components/FormMovie";


const MovieApp = () => {
    return (
        <MovieProvider>
            <div className={style.container}>
                <NavMovie/>
                <FormMovie/>
                <MovieList/>
            </div>
        </MovieProvider>
    )
}

export default MovieApp