import React from "react";

const Recipe = ({title, image, calories, ingredients}) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title}/>
            <ul>
                {ingredients.map(el => (
                    <li>{el.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
        </div>
    )
}
export default Recipe