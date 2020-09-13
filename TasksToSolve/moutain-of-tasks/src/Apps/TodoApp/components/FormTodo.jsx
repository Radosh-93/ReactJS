import React, {useState, useEffect} from "react";
import AddIcon from '@material-ui/icons/Add';

const FormTodo = (props) => {
    //local state
    const [inputText, setInputText] = useState('');
    const [inputMode, setInputMode] = useState(false)

    useEffect(() => {
        props.setTodoListFiltered()
    }, [props.status, props.todoList])

    //functions
    const createList = (e) => {
        e.preventDefault();
        props.setTodoList(inputText);
        setInputText('')
        setInputMode(false)
    }

    return (
        <form onSubmit={createList} className='form-todo' onClick={() => {
            setInputMode(true)
        }}>
            <button type='submit' className='btn-plus btn-task'><AddIcon/></button>
            {inputMode ?
                <input type="text"
                       className='input-todo'
                       value={inputText}
                       onBlur={(e) => {setInputMode(false); createList(e)}}
                       autoFocus={true}
                       onChange={(e) => {setInputText(e.target.value)}}/>
                : <p>Add a task</p>}

        </form>
    )
}
export default FormTodo;
