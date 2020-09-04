import React from "react";
import style from '../TodoApp.module.css'
import {connect} from "react-redux";
import {completeTodo, deleteTodo} from "../../../redux/todoList-reducer";


const Todo = (props) => {
    return (
        <li>
            <span className={props.completed ? style.complete : ''}>{props.text}</span>
            <button onClick={() => {props.completeTodo(props.id)}}>v</button>
            <button onClick={() => {props.deleteTodo (props.id)}}>x</button>
        </li>
    )
}

export default connect(null, {deleteTodo, completeTodo})(Todo)