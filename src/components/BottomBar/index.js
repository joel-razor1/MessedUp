import React, { Component } from "react";
import "./index.css";
import FontIcon from "material-ui/FontIcon";
import Paper from "material-ui/Paper";
import { Icon } from "antd";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import { Link } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import { Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

const recentsIcon = <Icon type="home" />;
const favoritesIcon = <Icon type="edit" />;
const nearbyIcon = <Icon type="setting" />;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      route: "",
      red: false
    };
  }
  select = (index, i) => {
    this.setState({ route: index, red: true, selectedIndex: i });
  };
  render() {
    return (
      <div className="">
        <Paper zDepth={1} className="bottomtab" style={{ paddingLeft: "0px" }}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Home"
              icon={recentsIcon}
              onClick={() => this.select("/home", 0)}
            />
            <BottomNavigationItem
              label="Mess Cuts"
              icon={favoritesIcon}
              onClick={() => this.select("/usercuts", 1)}
            />
            <BottomNavigationItem
              label="Settings"
              icon={nearbyIcon}
              onClick={() => this.select("/settings", 2)}
            />
          </BottomNavigation>
        </Paper>
        {this.state.red ? <Redirect to={this.state.route} /> : null}
      </div>
    );
  }
}
