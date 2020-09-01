import React, {useState, useEffect} from "react";
import * as axios from "axios";

const APP_KEY = '802247c3-1f387996-bb45393a-0e5f9735'
const Shop = () => {

    useEffect(() => {
        fetchItems();
    })
    const fetchHeroes = async () => {
        const data = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`);
        const items = await data.json();
        console.log(items)
    }
    const fetchItems = async () => {
        const data = await fetch(`https://fortniteapi.io/v1/items/upcoming?lang=en`, {headers: {Authorization: APP_KEY}});
        const items = await data.json();
        console.log(items)
    }
    return (
        <div>
            <h1>Shop page</h1>
        </div>
    )
}
export default Shop