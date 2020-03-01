import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Example from './components/test.jsx'
import CardExampleGroupCentered from './components/favourite.jsx'

function App() {
  const [credential, setCredential] = React.useState({
    token: ""
  });
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            
          </Route>
          <Route exact path="/test">
          <CardExampleGroupCentered/>
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
