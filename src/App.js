import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
          <Route exact path="/features">
            
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
