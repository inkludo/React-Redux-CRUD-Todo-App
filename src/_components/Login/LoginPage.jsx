import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

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
  )


class Login extends Component {

  render() {
    const { handleSubmit } = this.props;
    return <form onSubmit={handleSubmit} style={{ marginTop: '25vh' }} className="col-md-3 offset-md-4 form-group" >
      <h1 className='text-center'>Login</h1>
      <Field
        className="form-control"
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />

      <div>

        <button style={{ marginTop: '10px' }} className="btn btn-primary" type="submit" >
          Login
                </button>
        <Link style={{ marginTop: '10px', textDecoration: 'none' }}
          to="/register" className="btn btn-link">Register</Link>
      </div>

    </form>
  }
}

export default reduxForm({
  form: 'login',
  validate
})(Login);