import axios from 'axios';
import {
    API_BASE
} from "../_constants/API";

const token = localStorage.getItem('token');

class TodosServiceClass {

    getAll() {
        console.log(token);
        return axios.get(`${API_BASE}/todos`, {
                headers: {
                    token
                }
            })
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err));
    }

    getTodo(id) {
        return axios.get(`${API_BASE}/todos/${id}`, {
                headers: {
                    token
                }
            })
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err));
    }

    deleteTodo(id) {
        return axios.delete(`${API_BASE}/todos/${id}`, {
                headers: {
                    token
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }


    addTodo(title, expires_at) {
        return axios.post(`${API_BASE}/todos`, {
                title,
                expires_at
            }, {
                headers: {
                    token
                }
            })
            .then(res => {
                console.log(res.data);
                return res.data
            })
            .catch(err => console.log(err));
    }


    editTodo(completed, id, title, expires_at) {
        return axios.put(`${API_BASE}/todos/${id}`, {
                title,
                completed,
                expires_at
            }, {
                headers: {
                    token
                }
            })
            .then(res => {
                console.log(res.data);
                return res.data
            })
            .catch(err => console.log(err));
    }

}

const TodosService = new TodosServiceClass();
export default TodosService;