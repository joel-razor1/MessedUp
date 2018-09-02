import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCuts from "./components/UserCuts";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Main from "./components/Main";
import Settings from "./components/Settings";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BottomBar from "./components/BottomBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.props.children}
        <BottomBar />
      </div>
    );
  }
}

export default App;
