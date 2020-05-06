import React, { useState } from 'react';
import './App.css';
import Login from './components/Login'
import Games from './components/Games'
import Nav from './components/Nav'
import Levels from './components/Levels'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = ()=> {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [topic, setTopic] = useState("");

  return (

    
    <Router>
      <div className="App">
        <Nav nombre={nombre}/>
        <Switch>
          <Route path="/" exact component={() => <Login nombre={nombre} setNombre={setNombre}
          apellido={apellido} setApellido={setApellido}/>} />

          <Route path="/juegos" exact component={()=> <Games nombre={nombre} setTopic={setTopic} />}/>

          <Route path="/niveles" exact component={() => <Levels topic={topic} />}/>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
