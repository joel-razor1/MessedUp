import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCuts from "./components/UserCuts";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Main from "./components/Main";
import Settings from  "./components/Settings"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BottomBar from "./components/BottomBar"




class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
  
  componentDidMount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Switch>
            <Route path="/settings" exact component={Settings}/>
            <Route path="/usercuts" exact component={UserCuts} />
            <Route path="/login" exact component={Auth} />
            <Route path="/" exact component={Main} />
          </Switch>
          </div>
          

        </BrowserRouter>

        
        
      </div>
    );
  }
}

export default App;
