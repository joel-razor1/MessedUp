import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

ReactDOM.render(
  <MuiThemeProvider>
<App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
