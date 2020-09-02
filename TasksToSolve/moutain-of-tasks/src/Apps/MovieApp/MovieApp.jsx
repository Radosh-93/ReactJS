import React from "react";
import MovieList from "./components/MovieList";
import style from './MovieApp.module.css'

const MovieApp = () => {
    return (
        <div className={style.container}>
            <MovieList/>
        </div>
    )
}

export default MovieApp