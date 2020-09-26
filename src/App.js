import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import About from "./components/pages/about/AboutPage";
import Login from "./components/pages/authentication/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
