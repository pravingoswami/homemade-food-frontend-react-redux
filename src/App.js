import React from 'react';
import RegisterUser from './components/register/Register';
import {BrowserRouter, Route, Link} from "react-router-dom"
import HomePage from './components/home/HomePage';
import LoginUser from './components/login/LoginUser';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <h1>Welcome</h1>

        <Link to = "/home" >Home</Link>&nbsp;&nbsp;
        <Link to = "/register" >Register</Link>&nbsp;&nbsp;
        <Link to = "/login" >Login</Link>

        <Route path = "/home" component = {HomePage} exact = {true} />       
        <Route path = "/register" component = {RegisterUser} exact = {true} />       
        <Route path = "/login" component = {LoginUser} exact = {true} />       

      </BrowserRouter>
    </div>
  );
}

export default App;
