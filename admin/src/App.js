import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { isUserLoggedIn, connectNodes} from "./actions";
import Content from "./components/Content/Content";
import Main from "./components/Main/Main";
import Home from "./components/Homepage/Home";



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
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
         <Route path="/Content" exact component={Content} />
        <Route path="/Main" exact component={Main} />

      </Switch>
      </>
  );
}
export default App;
