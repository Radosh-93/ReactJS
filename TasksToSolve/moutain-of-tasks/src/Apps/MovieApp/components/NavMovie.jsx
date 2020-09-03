import React, {useContext} from "react";
import style from '../MovieApp.module.css'
import {MovieContext} from "../Store/MovieContext";

const NavMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className={style.nav}>
            <h4>Radosh</h4>
            <p className={style.movie_counter}>List of Movies: {movies.length}</p>
        </div>
    )
}
export default NavMovie