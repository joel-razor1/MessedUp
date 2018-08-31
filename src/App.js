import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCuts from "./components/UserCuts" ;
import Auth from "./components/Auth";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/usercuts" component={UserCuts} />
            <Route path="/home" component={Auth} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
