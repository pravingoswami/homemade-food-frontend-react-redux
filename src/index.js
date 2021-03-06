import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './redux/store/configureStore';
import {Provider} from "react-redux"
import { setUser } from './redux/actions/userActions';
import axios from './connfig/axios';

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})


if(localStorage.getItem("x-auth")){
  axios.get("/users/info", {
    headers : {
      'x-auth' : localStorage.getItem('x-auth')
    }
  })
    .then(response => {
      store.dispatch(setUser(response.data))
    })
}


console.log(store.getState())

const jsx = (
    <Provider store = {store} >
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
