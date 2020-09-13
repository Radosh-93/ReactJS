import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';

const FormNavTodo = ({setTitlesList}) => {
    const [inputText, setInputText] = useState('');
    const createList = (e) => {
        e.preventDefault();
        setTitlesList(inputText);
        setInputText('')
    }
    return (
        <div className='block-form-nav'>
            <form className='form-nav' onSubmit={createList}>
                <button className='btn-nav btn-plus' type='submit'><AddIcon /></button>
                <input className='input-nav input-todo'
                       type="text"
                       placeholder='Add a new list'
                       value={inputText}
                       onChange={(e) => {
                           setInputText(e.target.value)
                       }}/>
            </form>
        </div>
    )
}

export default FormNavTodo