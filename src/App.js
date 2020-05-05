import React, { useState } from 'react';
import './App.css';
import Login from './components/Login'
import Games from './components/Games'
import Nav from './components//Nav'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = ()=> {
  const [nombre, setNombre] = useState("Walter");
  const [apellido, setApellido] = useState("");

  return (

    
    <Router>
      <div className="App">
        <Nav nombre={nombre}/>
        <Switch>
          <Route path="/" exact component={() => <Login nombre={nombre} setNombre={setNombre}
          apellido={apellido} setApellido={setApellido}/>} />

          <Route path="/juegos" exact component={Games}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
