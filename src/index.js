import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import UserCuts from "./components/UserCuts";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Main from "./components/Main";
import Settings from "./components/Settings";
import error from "./components/Error404";
import { isAuthenticated } from "./util/config";

ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
        <App>
          <Main>
            <Route
              path="/home"
              exact
              render={props =>
                isAuthenticated ? <Home /> : <Redirect to="/" />
              }
            />
            <Route path="/settings" exact component={Settings} />
            <Route path="/usercuts" exact component={UserCuts} />
          </Main>
        </App>
        <Route component={error} />
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
