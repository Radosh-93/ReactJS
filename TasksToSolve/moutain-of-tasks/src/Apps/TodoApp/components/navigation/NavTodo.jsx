import React from "react";
import TodoNavItem from "./TodoNavItem";
import FormNavTodo from "./FormNavTodo";

const NavTodo = ({setTitlesList, titlesList}) => {
    return (
        <nav className='nav-todo'>
            <p className='owner'>Radosh's Todo List</p>
            {titlesList.map(title => <TodoNavItem title={title}/>)}
            <FormNavTodo setTitlesList={setTitlesList} />
        </nav>
    )
}

export default NavTodo