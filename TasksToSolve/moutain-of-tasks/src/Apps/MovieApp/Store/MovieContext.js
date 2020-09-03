import React, {createContext, useState} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {id: 1, name: 'Harry Potter', price: '$10'},
        {id: 2, name: 'Inception', price: '$10'},
        {id: 3, name: 'The Big Bang Theory', price: '$10'},
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}