import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
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
            <Route path="/home" component={Home} />
            <Route path="/" component={Auth} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
