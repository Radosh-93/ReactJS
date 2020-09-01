import React, {useState, useEffect} from "react";
import * as axios from "axios";

const APP_KEY = '3254402867981562'
const Shop = () => {

    useEffect(() => {
        fetchItems();
    })
    const fetchItems = async () => {
        const data = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`);
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