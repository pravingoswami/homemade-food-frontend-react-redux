import React from 'react';
import RegisterUser from './components/register/Register';
import {BrowserRouter, Route, Link} from "react-router-dom"
import HomePage from './components/home/HomePage';
import LoginUser from './components/login/LoginUser';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div>
      <BrowserRouter>
      
      <h1>Welcome</h1>

        {
          Object.keys(props.user).length > 0 ? (
            <React.Fragment>
             {
               props.user.role === "Customer" && (
                <React.Fragment>
                    <Link to = "/home" >Home</Link>&nbsp;&nbsp;
                    <Link to = "/profile" >Profile</Link>&nbsp;&nbsp;
                    <Link to = "/customer" >Customer</Link>&nbsp;&nbsp;
                    <Link to = "/logout" >Logout</Link>&nbsp;&nbsp;
                </React.Fragment>
               )
            }
            {
               props.user.role === "Chef" && (
                <React.Fragment>
                  <Link to = "/home" >Home</Link>&nbsp;&nbsp;
                  <Link to = "/profile" >Profile</Link>&nbsp;&nbsp;
                  <Link to = "/chef" >Chef</Link>&nbsp;&nbsp;
                  <Link to = "/logout" >Logout</Link>&nbsp;&nbsp;
            </React.Fragment>
               )
             }
             {
                props.user.role === "Admin" && (
                <React.Fragment>
                  <Link to = "/home" >Home</Link>&nbsp;&nbsp;
                  <Link to = "/profile" >Profile</Link>&nbsp;&nbsp;
                  <Link to = "/admin" >Admin</Link>&nbsp;&nbsp;
                  <Link to = "/logout" >Logout</Link>&nbsp;&nbsp;
                </React.Fragment>
                  )
             }
            </React.Fragment>
             ) : (
              <React.Fragment>
                <Link to = "/home" >Home</Link>&nbsp;&nbsp;
                <Link to = "/login" >Login</Link>&nbsp;&nbsp;
                <Link to = "/register" >Register</Link>&nbsp;&nbsp;
          </React.Fragment>
             
          )
        }


        <Route path = "/home" component = {HomePage} exact = {true} />       
        <Route path = "/register" component = {RegisterUser} exact = {true} />       
        <Route path = "/login" component = {LoginUser} exact = {true} />       

      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps)(App);
