import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import About from "./components/pages/about/AboutPage";
import Login from "./components/pages/authentication/Login";
import Register from "./components/pages/authentication/Register";
import HomeDecoration from './components/pages/SideDrawer/Plants/HomeDecoration'
import Team from './components/pages/Footer/team';
import Faq from './components/pages/Footer/faq';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/team" component={Team}></Route>
          <Route exact path="/faq" component={Faq}></Route>
          <Route exact path="/home_decoration" component={HomeDecoration}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
