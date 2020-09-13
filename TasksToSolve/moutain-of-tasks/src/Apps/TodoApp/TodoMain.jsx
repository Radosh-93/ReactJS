import React from "react";
import FormTodo from "./components/FormTodo";
import './TodoApp.scss'
import {connect} from "react-redux";
import {
    deleteTodo,
    setStatus,
    setTitlesList,
    setTodoList,
    setTodoListFiltered
} from "../../redux/todoList-reducer";
import Todos from "./components/Todos";
import NavTodo from "./components/navigation/NavTodo";
import FilterTodo from "./components/FilterTodo";

const TodoApp = (props) => {
    const {todoList, setTodoList, status, setStatus, todoListFiltered, setTodoListFiltered, titlesList, setTitlesList} = props;
    return (
        <div className='TodoApp'>
            <NavTodo setTitlesList={setTitlesList} titlesList={titlesList}/>
            <main className='main'>
                <div className='header'>
                    <h1 className='title'>Item</h1>
                    <FilterTodo setStatus={setStatus}/>
                </div>
                <FormTodo setTodoList={setTodoList}
                          status={status}
                          setStatus={setStatus}
                          setTodoListFiltered={setTodoListFiltered}
                          todoList={todoList}/>
                <Todos todoListFiltered={todoListFiltered} deleteTodo={deleteTodo}/>
            </main>
        </div>
    )
}
const mapStateToProps = (state) => ({
    todoList: state.todoListApp.todoList,
    todoListFiltered: state.todoListApp.todoListFiltered,
    status: state.todoListApp.status,
    titlesList: state.todoListApp.titlesList,

})
export default connect(mapStateToProps, {setTodoList, setStatus, setTodoListFiltered, setTitlesList})(TodoApp);