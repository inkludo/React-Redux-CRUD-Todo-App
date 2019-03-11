import React, { Component } from 'react';
import { PATHS } from '../../_constants/routes'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../../_actions/user.actions';
import Signup from '../../_components/RegisterPage';

class SignupContainer extends Component {
    render() {
        return <div className="signup-container">
            <Signup onSubmit={this._handleSubmit} />
        </div>
    }

    _handleSubmit = (value) => {
        this.props.actions.register(value);
        this.props.history.push(PATHS.LOGIN);
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        register
    }, dispatch)
});

export default connect(null, mapDispatchToProps)(SignupContainer);