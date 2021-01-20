import React from 'react';
import './App.css';
import Navbar from "./components/Nav/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Registrer/Register";
import Users from "./components/Users/Users";

import {Route, NavLink} from "react-router-dom";


function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/users" exact component={Users} />
      </React.Fragment>
  )
}


export default App;
