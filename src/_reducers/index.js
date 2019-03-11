import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './authentication.reducer';
import registration from './registration.reducer';
import todos from './todos.reducer';

export default combineReducers({
    form: formReducer,
    login,
    registration,
    todos
})
