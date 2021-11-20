import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Router, Route, Switch, Redirect } from "react-router-dom";

import { createBrowserHistory } from "history";
import Home from './components/home/home.component';
import Contact from './components/contact/contact.component';
export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Router history={history}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Redirect from="/" to="home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
