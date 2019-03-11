import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props
        return <Route {...rest}
            render={props => {
                return !this.props.auth ? <Redirect to="/login" /> : <Component {...props} />
            }}
        />
    }
}

const mapStateToProps = (state) => ({
    auth: state.login.auth
});

export default connect(mapStateToProps)(PrivateRoute);