import React from "react";
import Todo from "./Todo";

const Todos = ({todoListFiltered}) => {
    return(
        <ul>
            {todoListFiltered.map(item => <Todo text={item.text} key={item.id} id={item.id} completed={item.completed}/>)}
        </ul>
    )
}
export default Todos