import React, { Component } from 'react';

import ModalForm from '../../_components/ModalForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDate, editTodo } from '../../_actions/todos.actions';
import { PATHS } from "../../_constants/routes";



class TodoDetailsContainer extends Component {

    render() {
        return <div className="col-xs-4 col-md-3 offset-md-4">

            <ModalForm
                currentDate={this.props.currentDate}
                changeDate={this._changeDate}
                addOrEdit={this._addOrEdit}
            />
        </div>
    }


    _changeDate = (date) => {
        this.props.actions.changeDate(date)
    }
    _addOrEdit = (e) => {
        this.props.history.push(PATHS.TODOS);
        this.props.actions.editTodo(this.props.todoForm.values.title,
            this.props.currentDate);
        e.preventDefault()
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        changeDate,
        editTodo
    }, dispatch)
});

const mapStateToProps = (state) => ({
    currentDate: state.todos.currentDate,
    currendId: state.todos.currentId,
    todoForm: state.form.todoForm,
    todos: state.todos.todosData
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailsContainer);