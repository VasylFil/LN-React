import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Nav/Navbar';
import Login from './components/Forms/Login/Login';
import Register from './components/Forms/Register/Register';
import Users from './components/Users/Users';
import Profile from './components/Users/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';
import {login, register, logout, set_login, set_register, clear_fields} from "./store/actionTypes";

function App(props) {
    return (
      <React.Fragment>
        <Navbar guard={props.isLoggedIn}/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login">
                <Login state={props}/>
            </Route>
            <Route path="/register">
                <Register state={props}/>
            </Route>
            <PrivateRoute path="/profile/:id" guard={props.isLoggedIn}>
                <Profile state={props} />
            </PrivateRoute>
            <PrivateRoute path="/users" guard={props.isLoggedIn}>
                <Users state={props} />
            </PrivateRoute>
            <Redirect to="/" />
        </Switch>
      </React.Fragment>
    )
}


const stateToProps = state => {
    return {...state}
}

const dispatchToProps = dispatch => {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout()),
        register: (value) => dispatch(register(value)),
        set_login: (value) => dispatch(set_login(value)),
        set_register: (value) => dispatch(set_register(value)),
        clear_fields: (value) => dispatch(clear_fields(value)),
    }
}


export default connect(stateToProps, dispatchToProps)(App)
