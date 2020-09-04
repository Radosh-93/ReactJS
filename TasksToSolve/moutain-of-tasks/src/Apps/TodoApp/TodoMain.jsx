import React from "react";
import FormTodo from "./components/FormTodo";
import {connect} from "react-redux";
import {deleteTodo, setStatus, setTodoList, setTodoListFiltered} from "../../redux/todoList-reducer";
import Todos from "./components/Todos";

const TodoApp = ({setTodoList, setStatus, todoList, status, todoListFiltered, setTodoListFiltered}) => {
    return (
        <div>
            <h1>Radosh's ToDo list</h1>
            <FormTodo setTodoList={setTodoList}
                      status={status}
                      setStatus={setStatus}
                      setTodoListFiltered={setTodoListFiltered}
                      todoList={todoList}/>
            <Todos todoListFiltered={todoListFiltered} deleteTodo={deleteTodo}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    todoList: state.todoListApp.todoList,
    todoListFiltered: state.todoListApp.todoListFiltered,
    status: state.todoListApp.status

})
export default connect(mapStateToProps, {setTodoList, setStatus, setTodoListFiltered})(TodoApp);