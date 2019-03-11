
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/Todo.css';

class TodoItem extends Component {

    render() {
        const { todos, logoutUser, toggleTodo, deleteTodo, openModal, getTodo } = this.props;
        return (
            <div >

                <button type="button" className="btn btn-outline-info btn-sm float-right btn-lg">
                    <Link onClick={logoutUser} className='logout' to="/login">Logout</Link>
                </button>

                <h2 className="text-center">To-Do List</h2>

                {
                    !todos.length ? 'Loading...' :
                        <ul className="list-group todo-list">
                            {
                                todos.map(i =>
                                    <li className="list-group-item " key={i.id}>
                                        <span className="todo-list-item-label">

                                            <button className={i.completed ? "btn btn-success btn-sm float-left" : "btn btn-outline-success btn-sm float-left"}
                                                onClick={() => toggleTodo(i.completed, i.id)} type="button">
                                                <i className="fa fa-check" />
                                            </button>

                                            <span className={`indicator ${this._indicator(i.expires_at)} `}>●</span>
                                            <Link id={i.id} onClick={() => { getTodo(i.id) }}
                                                className={i.completed ? 'title-completed' : 'title'}
                                                to={`/todos/ + ${i.id}`}> {i.title} </Link>


                                            <button onClick={() => deleteTodo(i.id)} type="button"
                                                className="btn btn-outline-danger btn-sm float-right">
                                                <i className="fa fa-trash-o" />
                                            </button>

                                            <button onClick={() => { openModal(); getTodo(i.id) }} type="button"
                                                className="btn btn-outline-primary btn-sm float-right">
                                                <i className="fa fa-edit" />
                                            </button>
                                        </span>
                                    </li>
                                )
                            }
                        </ul>

                }



            </div>
        )
    }

    _indicator = (expires_at) => {

        const currentTime = new Date().getTime();
        const oneHour = 60 * 60 * 1000;
        const expiresAt = new Date(expires_at).getTime();


        if (expiresAt < currentTime + 1 * oneHour) {

            return 'red'

        } else if (expiresAt > currentTime + 1 * oneHour &&
            expiresAt < currentTime + 3 * oneHour) {

            return 'yellow'

        } else {

            return 'green'

        }
    }
}

export default TodoItem;
