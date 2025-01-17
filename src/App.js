import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home'
import Favorite from './components/favorite'
import Login from './components/login'
import Reference from './components/reference'

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
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/reference">
            <Reference/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
