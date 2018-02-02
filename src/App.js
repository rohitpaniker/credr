import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index'
import thunk from 'redux-thunk';
import axios from 'axios';
import Landing from './pages/Landing'

let store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Landing />
      </Provider>
    );
  }
}

export default App;
