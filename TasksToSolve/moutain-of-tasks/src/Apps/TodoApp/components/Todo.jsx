import React from "react";
import {connect} from "react-redux";
import {completeTodo, deleteTodo} from "../../../redux/todoList-reducer";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Todo = (props) => {
    return (
        <li className='task-item'>
            <button className={`btn-plus${!props.completed ? ' checking' : ''}`} onClick={() => {props.completeTodo(props.id)}}>
                {props.completed ? <CheckCircleIcon/> : <RadioButtonUncheckedIcon/>}
            </button>
            <span className={`text${props.completed ? ' complete' : ''}`}>{props.text}</span>
            <button className='btn-plus' onClick={() => {props.deleteTodo (props.id)}}>
                <DeleteForeverIcon className='hover-red' style={{fontSize: '30px'}}/>
            </button>
        </li>
    )
}

export default connect(null, {deleteTodo, completeTodo})(Todo)