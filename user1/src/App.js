import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./components/Homepage/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dash from "./components/Dash/Dash";
import Content from "./components/Content/Content";
import Register from "./components/Start/Register";
import Voter from "./components/Start/Voter";
import { connectNodes, isUserLoggedIn} from "./actions";

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
const auth = useSelector(state => state.auth);

useEffect(() => {
  if(!auth.authenticate){
  dispatch(isUserLoggedIn());
}
if(auth.authenticate){
  dispatch(connectNodes());
}


}, [auth.authenticate]);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register"  component={Register} />
        <Route path="/Signup" exact component={Signup} />
        
       <Route path="/Content" exact component={Content} />
        <Route path="/Dash" exact component={Dash} />

        <Route path="/Voter" exact component={Voter} />
      </Switch>
    </Router>
  );
}
export default App;
