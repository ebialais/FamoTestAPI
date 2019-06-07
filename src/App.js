import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Layout/Home/Home';
import Infos from './Layout/Info/Infos';

function App() {
  
  return (
    <div className="App">
      
      <Router basename='/TicketMaster'>
        <Switch>
          <Route path="/" exact render={()=>(<Home />)} />
          <Route path="/Infos/:id" render={()=><Infos />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
