const SET_TODO_LIST = 'SET_TODO_LIST';
const DELETE_TODO = 'DELETE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SET_STATUS = 'SET_STATUS';
const SET_FILTER_TODO = 'SET_FILTER_TODO';

let initialState = {
    todoList: [],
    todoListFiltered: [],
    status: 'all',

};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_LIST:
            if (action.text !== '') {
                let list = {
                    id: (state.todoList[state.todoList.length - 1] !== undefined ? state.todoList[state.todoList.length - 1].id + 1 : 1),
                    text: action.text,
                    completed: false
                };
                return {...state, todoList: [...state.todoList, list]};
            }
        case DELETE_TODO: {
            return {...state, todoList: state.todoList.filter(item => item.id !== action.id)}
        }
        case COMPLETE_TODO: {
            return {
                ...state,
                todoList: state.todoList.map(el => {
                    if (el.id === action.id) {
                        return {...el, completed: !el.completed}
                    }
                    return el
                })
            }
        }
        case SET_FILTER_TODO: {
            switch (state.status) {
                case "all":
                    return {...state, todoListFiltered: state.todoList}
                case "completed":
                    return {...state, todoListFiltered: state.todoList.filter(el => el.completed)}
                case "uncompleted":
                    return {...state, todoListFiltered: state.todoList.filter(el => !el.completed)}
            }
            return state
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const setTodoList = (text) => ({type: SET_TODO_LIST, text});
export const deleteTodo = (id) => ({type: DELETE_TODO, id});
export const completeTodo = (id) => ({type: COMPLETE_TODO, id});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setTodoListFiltered = () => ({type: SET_FILTER_TODO});


export default todoListReducer;