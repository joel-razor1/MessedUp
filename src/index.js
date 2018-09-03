import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserCuts from "./components/UserCuts";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Main from "./components/Main";
import Settings from "./components/Settings";
import error from "./components/Error404"




ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <Switch>

        <Route path="/" exact component={Auth} />

        
        

        <App>
          <Main>
            <Switch>
              <Route path="/home" exact component={Home} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/usercuts" exact component={UserCuts} />
              <Route component={error}/>
            </Switch>
          </Main>
          
        </App>
        
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
