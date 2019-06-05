import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Layout/Home';
import Infos from './Layout/Infos';

function App() {
  return (
    <div className="App">
      <Router basename='/Harvard-Art-Museum'>
        <Switch>
          <Route path="/" exact render={()=>(<Home />)} />
          <Route path="/Infos/:id" component={Infos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
