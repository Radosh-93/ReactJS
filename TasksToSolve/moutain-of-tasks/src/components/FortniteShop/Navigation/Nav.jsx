import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (

        <nav className={'nav'}>
            <h3 className={'logo'}><NavLink to='/fortnite'>Logo</NavLink></h3>
            <ul className={'pages'}>
                <li className={'pages_item'}><NavLink to='/fortnite/about'>About</NavLink></li>
                <li className={'pages_item'}><NavLink to='/fortnite/shop'>Shop</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation