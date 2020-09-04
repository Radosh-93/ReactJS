import React, {useState, useEffect} from "react";

const FormTodo = (props) => {
    //local state
    const [inputText, setInputText] = useState('');
    useEffect(()=> {
        props.setTodoListFiltered()
    }, [props.status, props.todoList])
    const createList = (e) => {
        e.preventDefault();
        props.setTodoList(inputText);
        setInputText('')
    }
    const filterList = (e) => {
        props.setStatus(e.target.value)
    }
    return (
        <form onSubmit={createList}>
            <input type="text" value={inputText} onChange={(e) => {
                setInputText(e.target.value)
            }}/>
            <button type='submit'>+</button>
            <select name="filtered" onChange={filterList}>
                <option value="all" defaultValue>All</option>
                <option value="uncompleted">Uncompleted</option>
                <option value="completed">Completed</option>
            </select>
        </form>
    )
}
export default FormTodo;
