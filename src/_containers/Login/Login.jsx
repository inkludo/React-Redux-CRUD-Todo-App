import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../_actions/user.actions';

import Login from '../../_components/Login';
import { PATHS } from "../../_constants/routes";


class LoginContainer extends Component {
    render() {
        return <div className="login-container">
            <Login onSubmit={this._handleSubmit} />
        </div>

    }

    _handleSubmit = (value) => {
        this.props.actions.login(value);
    }

    componentDidUpdate() {
        if (this.props.auth) {
            this.props.history.push(PATHS.TODOS);
        }
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        login
    }, dispatch)
});

const mapStateToProps = (state) => ({
    auth: state.login.auth,
    errorLogin: state.login.errorLogin
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);