import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/sign-up' >
          <SignUp />
        </Route>
        <Route path='/dashboard' >
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;