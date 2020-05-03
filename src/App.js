import React from 'react';
import './App.css';
import Login from './components/Login'
import Games from './components/Games'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/juegos" exact component={Games}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
