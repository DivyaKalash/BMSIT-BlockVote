import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./components/Homepage/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dash from "./components/Dashboard/Dash";
import Register from "./components/Signup/Register";
import Voter from "./components/Start/Voter";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="./Register"  component={Register} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="./Dash" exact component={Dash} />

        <Route path="./Voter" exact component={Voter} />
      </Switch>
    </Router>
  );
}
export default App;
