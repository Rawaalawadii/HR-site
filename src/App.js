import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { render } from '@testing-library/react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';




class App extends Component {
  render(){
  return (
      <Router>
        <Route
        path="/Login"
        component={Login}
        />
        
        <Route
        path="/Home"
        component={Home}
        />


        </Router>


  );
}
}
export default App;
