import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css'

import store from './store';

import LoginContainer from "./_containers/Login";
import SignupContainer from "./_containers/Signup";
import TodosContainer from "./_containers/Todos";
import TodoDetailsContainer from "./_containers/TodoDetails";
import PrivateRoute from "./_containers/PrivateRoute";
import {PATHS} from "./_constants/routes";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
          
                <Switch>
                  <Route exact path = {PATHS.INDEX} render = {()=>(<Redirect to='/todos'/>)}/>
                  <Route exact path={PATHS.LOGIN} component={LoginContainer}/>
                  <Route exact path={PATHS.SIGNUP} component={SignupContainer}/>
                  <PrivateRoute exact path={PATHS.TODOS} component={TodosContainer}/>
                  <PrivateRoute  path={PATHS.TODO_DETAILS} component={TodoDetailsContainer}/>
                
                </Switch>
            
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
