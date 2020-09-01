import React from "react";
import './Style.css'
import Navigation from "./Navigation/Nav";
import About from "./About/About";
import Shop from "./Shop/Shop";
import {Switch, Route} from 'react-router-dom'

const FortniteShop = () => {
    return (
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/fortnite' exact component={Home}/>
                    <Route path='/fortnite/about' component={About}/>
                    <Route path='/fortnite/shop' component={Shop}/>
                </Switch>
            </div>
    )
}

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default FortniteShop