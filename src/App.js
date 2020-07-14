import React,{useState} from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Games from './components/Games';
import Nav from './components/Nav';
import Levels from './components/Levels';
import Game1 from './components/game1/Game1';
import Game2 from './components/game2/Game2';
import Game3 from './components/game3/Game3';
import 'fontsource-roboto';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = ()=> {
  
  const isLogin = localStorage.getItem("id");
  const [login, setLogin] = useState(isLogin);
  const startGame = (data)=>{
    localStorage.setItem("id",data._id);
    localStorage.setItem('name', data.name);
    setLogin(true);
  }
  console.log("login",login,isLogin);
  return (
    <Router>
      <div className="App">
      {!login && !isLogin?<Login startGame={startGame} />:
        <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={() => login?<Games />:<Login/>} />

          <Route path="/juegos" exact component={()=> <Games />}/>

          <Route path="/niveles" exact component={() => <Levels />}/>

          <Route path="/juego1" exact component={() => <Game1></Game1> }/>

          <Route path="/juego2" exact component={() => <Game2></Game2> }/>

          <Route path="/juego3" exact component={() => <Game3></Game3> }/>
        </Switch>
        </div>
      }
      </div>
    </Router>
  );
}

export default App;
