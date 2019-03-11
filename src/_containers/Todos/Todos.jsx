import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTodos, 
    toggleComplete, 
    deleteTodo, 
    openModal, 
    closeModal, 
    getTodo, 
    changeDate, 
    editTodo, 
    addTodo } from '../../_actions/todos.actions';
import {logoutUser} from '../../_actions/user.actions';

import TodoItem from '../../_components/TodoItem';
import ModalForm from '../../_components/ModalForm';

class TodosContainer extends Component{

    render(){
        const {todos, open} = this.props;
        return <div className="col-xs-6 col-md-4 offset-md-4 ">

            <TodoItem
                todos={todos}
                toggleTodo={this._toggleTodo}
                deleteTodo={this._deleteTodo}
                openModal={this._openModal}
                getTodo={this._getTodo}
                logoutUser={this._logoutUser}
            />
                         
            
            <button style={{marginTop:'10px'}}
                onClick={this._openModal}
                className="btn btn-primary col-md-8 offset-md-2 ">
                Add To-Do
            </button>

            <Modal open={open} onClose={this._closeModal} center>

                <h4 className="logoheader">Create or edit To-Do</h4>

                <ModalForm
                    currentDate={this.props.currentDate} 
                    changeDate={this._changeDate}
                    addOrEdit={this._addOrEdit}
                />
            </Modal>
        </div>
    }

    componentDidMount(){
        this.props.actions.fetchAllTodos();
    };

    _getTodo = (id) =>{
        this.props.actions.getTodo(id);
    };

    
    _deleteTodo = (id)=>{
        this.props.actions.deleteTodo(id);
    };

    _toggleTodo = (completed, id)=>{
        this.props.actions.toggleComplete(completed, id);
    };

    _openModal = () => {
        this.props.actions.openModal();
    };

    _closeModal = () => {
        this.props.actions.closeModal();
    };
    
    _addOrEdit=(e)=>{

        if(this.props.currentId){
            this.props.actions.editTodo(this.props.todoForm.values.title, this.props.currentDate);
            this.props.actions.closeModal();
        } else{
            this.props.actions.addTodo(this.props.todoForm.values.title, this.props.currentDate);
            this.props.actions.closeModal();
        }

        e.preventDefault()
    };

    _changeDate = (date)=>{
        this.props.actions.changeDate(date)
    };


    _logoutUser = () => {
        this.props.actions.logoutUser();
    };
}

const mapDispatchToProps = dispatch =>({
    actions: bindActionCreators({
        fetchAllTodos,
        getTodo,
        addTodo,
        deleteTodo,
        editTodo,
        toggleComplete,
        openModal,
        closeModal,
        changeDate,
        logoutUser
    }, dispatch)
});

const mapStateToProps = (state)=>({
    todos:state.todos.todosData,
    open: state.todos.open,
    currentDate: state.todos.currentDate,
    currentId:state.todos.currentId,
    todoForm: state.form.todoForm
});

export default connect(mapStateToProps, mapDispatchToProps) (TodosContainer);