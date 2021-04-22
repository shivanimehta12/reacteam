import React from 'react';
import Home from './homepage';
import Next from './nextpage';
import NAV from './nav';

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App"> 
        <Router>
          <NAV />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/nextpage/:page/:details">
              <Next />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }

}

export default App;
