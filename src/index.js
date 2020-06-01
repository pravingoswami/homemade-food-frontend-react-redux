import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './redux/store/configureStore';
import {Provider} from "react-redux"

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

console.log(store.getState())

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store = {store} >
  <App />
</Provider>,
rootElement
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
