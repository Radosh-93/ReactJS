import React, {useState} from "react";
import Movie from "./Movie";

const MovieList = () => {
    const [movies, setMovies] = useState([
        {id: 1, name: 'Harry Potter', price: '$10'},
        {id: 2, name: 'Inception', price: '$10'},
        {id: 3, name: 'The Big Bang Theory', price: '$10'},
    ])

    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} name={movie.name} price={movie.price}/>

            ))}
        </div>
    )
}

export default MovieList