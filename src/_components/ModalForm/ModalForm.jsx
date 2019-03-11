import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import '../../styles/ModalForm.css'


class ModalForm extends Component {

    render() {
        const { currentDate, changeDate, addOrEdit } = this.props;

        return <form className="new-todo-form">
            <Field
                type="text"
                component="input"
                name="title"
                className="form-control"
            />

            <div className="datepiker-button">

                <DatePicker
                    selected={currentDate}
                    onChange={changeDate}
                    showTimeSelect
                    dateFormat="YYYY-MM-d HH:mm:ss"
                    className="datepiker form-control"
                    timeFormat="HH:mm"
                    minDate={new Date()}
                    timeIntervals={15}
                />

                <button className="btn btn-primary add-button"
                    onClick={addOrEdit}>Save</button>
            </div>
        </form>
    }
}

export default reduxForm({
    form: 'todoForm'
})(ModalForm);