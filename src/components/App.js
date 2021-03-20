import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Payment from './Payment';
import Login from './Login';
import Register from './Register';
import Orders from './Orders';
import Statistics from './Statistics';
import Sell from './Sell';
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
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/sell">
              <Sell />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
     
    
  )
}

export default App
