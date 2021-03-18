import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Payment from './Payment';
import Login from './Login';
import Orders from './Orders';
import Statistics from './Statistics';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';

function App() {
  return (
    
      
      <div>
        <Router >
        <NavbarComponent />
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
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
          </Switch>
          <hr className="mx-4 mt-5" />
          <Footer />
        </Router>
      </div>
     
    
  )
}

export default App
