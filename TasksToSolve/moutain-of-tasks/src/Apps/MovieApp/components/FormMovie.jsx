import React, {useContext, useState} from "react";
import {MovieContext} from "../Store/MovieContext";

const FormMovie = () => {
    let [movies, setMovies] = useContext(MovieContext);
    let [name, setName] = useState('');
    let [price, setPrice] = useState('')

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    const addMovie = (e) => {
        e.preventDefault();
        if (name !== '' && price !== '') {
            setMovies([...movies, {id: movies.length + 1, name, price}]);
            setName('');
            setPrice('');
        }
    }
    return (
        <form onSubmit={addMovie}>
            <input type="text"
                   placeholder={'Name'}
                   onChange={updateName}
                   value={name}/>
            <input type="text"
                   placeholder={'Price'}
                   onChange={updatePrice}
                   value={price}/>
            <button type={"submit"}>Add movie</button>
        </form>
    )
}

export default FormMovie