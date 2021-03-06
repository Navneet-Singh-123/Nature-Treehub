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
import Notification from './components/pages/Footer/Notification';
import Gallery from './components/pages/Footer/Gallery';
import TermsConditions from './components/pages/Footer/Terms'

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
          <Route exact path="/notification" component={Notification}></Route>
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route exact path="/terms_conditions" component={TermsConditions}></Route>
          <Route exact path="/home_decoration" component={HomeDecoration}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
