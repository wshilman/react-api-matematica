import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Games from './components/Games';
import Nav from './components/Nav';
import Levels from './components/Levels';
import Game1 from './components/game1/Game1';
import Game2 from './components/game2/Game2';
import Game3 from './components/game3/Game3';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = ()=> {

  return (

    
    <Router>
      <div className="App">
      <Nav/>
        <Switch>
          <Route path="/" exact component={() => <Login/>} />

          <Route path="/juegos" exact component={()=> <Games />}/>

          <Route path="/niveles" exact component={() => <Levels />}/>

          <Route path="/nivel1" exact component={() => <Game1></Game1> }/>

          <Route path="/nivel2" exact component={() => <Game2></Game2> }/>

          <Route path="/nivel3" exact component={() => <Game3></Game3> }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
