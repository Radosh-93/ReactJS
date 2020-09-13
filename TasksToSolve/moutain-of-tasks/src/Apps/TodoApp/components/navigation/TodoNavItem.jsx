import React, {useState} from "react";
import {ReactComponent as MenuHam} from '../../assets/img/menu_hamb.svg'

const TodoNavItem = ({title}) => {
    let [isActive, setIsActive] = useState(false)
    const showTodo = () => {
        setIsActive(!isActive)
    }
    return (
        <div onClick={showTodo} className={`item_block${isActive ? ' active' : ''}`}>
            <div className='item'>
                <MenuHam/>
                <p className='title'>{title}</p>
                <span className='todo_length'>4</span>
            </div>
        </div>
    )
}
export default TodoNavItem