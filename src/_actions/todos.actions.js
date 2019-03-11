import TodosService from '../_services/todos.servise';
import {
    change,
    reset
} from 'redux-form';

export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const FETCH_TODO = 'FETCH_TODO';
export const CHANGE_DATE = 'CHANGE_DATE';
export const EDIT_TODO = 'EDIT_TODO';
export const ADD_TODO = 'ADD_TODO';

export const fetchAllTodos = () => (dispatch) => {
    return TodosService.getAll()
        .then(res => {
            dispatch({
                type: FETCH_ALL_TODOS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
};


export const getTodo = (id) => (dispatch) => {
    return TodosService.getTodo(id)
        .then(todo => {
            dispatch({
                type: FETCH_TODO,
                currentDate: todo.data.expires_at,
                currentId: todo.data.id,
                currentTodo: todo.data
            })
            dispatch(change('todoForm', 'title', todo.data.title))
        })
        .catch(err => console.log(err))
};


export const deleteTodo = (id) => (dispatch) => {
    return TodosService.deleteTodo(id)
        .then(dispatch({
            type: DELETE_TODO,
            id: id
        }))
        .catch(err => console.log(err))
};

export const addTodo = (title, expires_at) => (dispatch, getState) => {
    const {
        todos: {
            todosData
        }
    } = getState();
    return TodosService.addTodo(title, expires_at)
        .then(res => {
            dispatch({
                type: ADD_TODO,
                new_title: res.data,
                new_todos: todosData
            })
        })
        .catch(err => console.log(err));
};

export const toggleComplete = (completed, id) => (dispatch) => {
    let toggle = completed ? false : true;
    return TodosService.editTodo(toggle, id)
        .then(() => {
            dispatch(fetchAllTodos())
        })
        .catch(err => console.log(err))
};


export const openModal = () => ({
    type: OPEN_MODAL
})

export const closeModal = () => (dispatch) => {
    dispatch(reset("todomodal"));
    dispatch({
        type: CLOSE_MODAL
    })
}


export const changeDate = (date) => ({
    type: CHANGE_DATE,
    new_date: date
});

export const editTodo = (title, expires_at) => (dispatch, getState) => {
    const {
        todos: {
            currentTodo
        }
    } = getState();
    return TodosService.editTodo(currentTodo.completed, currentTodo.id, title, expires_at)
        .then(() => {
            dispatch(fetchAllTodos());
            dispatch({
                type: EDIT_TODO
            })
        })
        .catch(err => console.log(err))
};
