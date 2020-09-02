import React from "react";

const Movie = ({name, price}) => {

    return (
        <li>
            <h4>{name}</h4>
            <p>{price}</p>
        </li>

    )
}

export default Movie