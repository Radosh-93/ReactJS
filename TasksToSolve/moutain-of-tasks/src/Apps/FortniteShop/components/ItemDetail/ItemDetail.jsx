import React, {useState, useEffect} from "react";

const APP_KEY = '802247c3-1f387996-bb45393a-0e5f9735'
const ItemDetail = ({match}) => {
    useEffect(() => {
        fetchItem()
    }, [])

    let [item, setItem] = useState({
        images: {}
    })

    const fetchItem = async () => {
        const data = await fetch(`https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=en`, {headers: {Authorization: APP_KEY}});
        const item = await data.json();
        console.log(item.item)
        console.log(item.item.images.icon)
        setItem(item.item)
    }
    return (
        <div className={'itemDetails'}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <img src={item.images.icon} alt={item.name}/>
        </div>
    )
}
export default ItemDetail