import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Payment from './Payment';
import Login from './Login';


function App() {
  return (
    <Router >
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
     
    </Router>
    
  )
}

export default App
