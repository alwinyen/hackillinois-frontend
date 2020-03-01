import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home'
import Favorite from './components/favorite'

function App() {
  const [credential, setCredential] = React.useState({
    token: ""
  });
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Favorite/>
          </Route>
          <Route exact path="/about">
            
          </Route>
          {/* <Route component={NotFound}/> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
