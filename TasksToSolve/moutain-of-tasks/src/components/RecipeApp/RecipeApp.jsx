import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";

const RecipeApp = () => {

    const APP_ID = '7e743bcc';
    const APP_KEY = '67e696c966c80656b4f83c7bfb7c230d';

    const [recipes, setRecipe] = useState([]);
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')

    useEffect(() => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipe(data.hits);
        console.log(data.hits)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('')
    }
    return (
        <div className={'RecipeApp'}>
            <form onSubmit={getSearch} className={'search_form'}>
                <input className={'search_bar'} type="text" value={search} onChange={updateSearch}/>
                <button className={'search_button'} type={'submit'}>Search</button>
            </form>
            {recipes.map((recipe, i) => (
                <Recipe key={i}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        calories={recipe.recipe.calories}
                        ingredients={recipe.recipe.ingredients}/>
            ))}

        </div>
    )
}
export default RecipeApp