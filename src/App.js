import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './Search';

function App() {
  return (
    <Router>
      <Navbar />
      <Search />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;