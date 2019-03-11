import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    }
    else if (values.username.length > 15 || values.username.length < 5) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.confirmPassword) {
        errors.email = 'Required'
    }
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
};

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => (
        <div >
            <label style={{ marginTop: '10px' }} className='font-weight-bold'>{label}</label>
            <div >
                <input className="form-control" {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span style={{ color: 'red' }}>{error}</span>))}
            </div>
        </div>
    );

class RegisterPage extends Component {

    render() {
        const { handleSubmit } = this.props;
        return <form onSubmit={handleSubmit} style={{ marginTop: '15vh' }} className="col-md-3 offset-md-4 form-group" >
            <h1 className='text-center'>Register</h1>
            <Field
                className="form-control"
                name="firstName"
                type="text"
                component={renderField}
                label="First Name"
            />
            <Field
                className="form-control"
                name="lastName"
                type="text"
                component={renderField}
                label="Last Name"
            />
            <Field
                className="form-control"
                name="username"
                type="text"
                component={renderField}
                label="Username"
            />
            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            <Field
                name="confirmPassword"
                type="password"
                component={renderField}
                label="Confirm Password"
            />

            <div>

                <button style={{ marginTop: '10px' }} className="btn btn-primary" type="submit" >
                    Register
                </button>
                <Link style={{ marginTop: '10px', textDecoration: 'none' }}
                    to="/login" className="btn btn-link">Cancel</Link>

            </div>

        </form>
    }
}

export default reduxForm({
    form: 'signup',
    validate
})(RegisterPage);