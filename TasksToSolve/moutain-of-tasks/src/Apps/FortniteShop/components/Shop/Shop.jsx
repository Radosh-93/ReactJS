import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const APP_KEY = '802247c3-1f387996-bb45393a-0e5f9735'
const Shop = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    let [items, setItems] = useState([])

    /*const fetchHeroes = async () => {
        const data = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`);
        const items = await data.json();
        console.log(items)
    }*/
    const fetchItems = async () => {
        const data = await fetch(`https://fortniteapi.io/v1/items/upcoming?lang=en`, {headers: {Authorization: APP_KEY}});
        const items = await data.json();
        console.log(items.items)
        setItems(items.items.filter((el, i) => el.rarity === 'shadow series'))

    }
    return (
        <div>
            {items.map((item => (
                <h1 key={item.id}><Link to={`/fortnite/shop/${item.id}`}>{item.name}</Link></h1>
            )))}
        </div>
    )
}
export default Shop