import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Layout/Home/Home';
import Infos from './Layout/Info/Infos';

function App() {
  
  return (
    <div className="App">
      <Router basename='/FamoTestAPI'>
        <Switch>
          <Route path="/" exact render={()=>(<Home />)} />
          <Route path="/:page" exact component={Home} />
          <Route path="/Infos/:page/:id"  component={Infos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
