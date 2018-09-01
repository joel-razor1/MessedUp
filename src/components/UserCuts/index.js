import React, { Component } from "react";
import { Card, Button, Row, Col, DatePicker, Modal, Tabs, Radio } from "antd";
import FontIcon from "material-ui/FontIcon";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import { Icon } from "antd";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import { Redirect } from "react-router-dom";
import "./index.css";
import a from "../../Res/moon.png";
import b from "../../Res/sun.png";
import c from "../../Res/calander.png";
import d from "../../Res/user.svg";
import e from "../../Res/edit.svg";
import f from "../../Res/settings.svg";

const { RangePicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const recentsIcon = <Icon type="home" />;
const favoritesIcon = <Icon type="edit" />;
const nearbyIcon = <Icon type="setting" />;

export default class UserCuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
      loading: false,
      visible: false,
      selectedIndex: 0
    };
  }

  select = index => this.setState({ selectedIndex: index });

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  onUserClick = () => {
    console.log("User Clicked");
  };

  onEditClick = () => {
    console.log("Edit Clicked");
  };

  onSettingsClick = () => {
    console.log("Settings clicked");
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  onFromDate = () => {
    <DatePicker onChange={this.onChange} />;
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  componentDidMount() {}

  render() {
    // const { mode } = this.state;
    const { visible, loading } = this.state;

    return (
      <div className="control">
        <Card className="car1dis">
          <p className="bold1" style={{ fontSize: "20px", color: "white" }}>
            Late Mess
          </p>
          <RadioGroup
            defaultValue="a"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <RadioButton
              value="lunch"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #6f1a8f, #6b1a8b, #671a87, #641983, #60197f)",
                color: "white",
                padding: 8,
                height: 35,
                width: "45%"
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="img-user-cuts" src={b} alt="sun pic" />
                Lunch
              </div>
            </RadioButton>
            <RadioButton
              value="dinner"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #6f1a8f, #6b1a8b, #671a87, #641983, #60197f)",
                color: "white",
                padding: 8,
                height: 35,
                width: "45%"
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="img-user-cuts" src={a} alt="sun pic" />
                Dinner
              </div>
            </RadioButton>
          </RadioGroup>
          <br />
          <br />
          <div className="but">
            <Button
              className="but1"
              style={{
                color:
                  "linear-gradient(to right, #7a209c, #6b1c8a, #5d1878, #4f1466, #411055)",
                fontWeight: "bold"
              }}
            >
              Save my Food
            </Button>
          </div>
        </Card>
        <Card className="car2dis">
          <p className="bold1 " style={{ fontSize: "20px", color: "white" }}>
            Mess Cut
          </p>
          <div className="disf1">
            <div className="size3">
              <p className="bold2" style={{ fontSize: "21px", color: "white" }}>
                FROM
              </p>
              {/* <img onClick={onFromDate}src={c} alt='datepic'/> */}
              {/* <DatePicker onChange={onChange} /> */}
            </div>
            <div className="size4">
              <p className="bold2" style={{ fontSize: "21px", color: "white" }}>
                TO
              </p>
              {/* <img src={c} alt='datepic'/> */}
              {/* <DatePicker onChange={onChange} /> */}
            </div>
          </div>
          <br />
          <br />
          <div>
            <RangePicker size="large" onChange={this.onChange} />
          </div>
          <br />
          <div className="but2">
            <Button
              type="default"
              className="but1"
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                paddingLeft: "25px",
                paddingLeft: "25px"
              }}
            >
              {" "}
              REQUEST
            </Button>
          </div>
        </Card>
        <br />
        <div className="but3">
          <p className="grey" style={{ fontSize: "20px", color: "white" }}>
            Mess Cut History
          </p>
        </div>
        <br />
        <div className="car3dis">
          <div className="disf1">
            <div className="size5">
              <p className="bold1" style={{ color: "white" }}>
                You have reuested mess cut from dd/mm/yy to dd/mm/yy
              </p>
            </div>
            <div className="size6">
              <p className="bold1" style={{ color: "white" }}>
                Effective Total
              </p>
              <p className="bold2" style={{ fontSize: "25px", color: "white" }}>
                3.6
              </p>
            </div>
          </div>
        </div>
        <Paper zDepth={1} className="bottomtab" style={{ paddingLeft: "0px" }}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

{
  /* <div className="disf1">
            <div className="size1">
              <div className="disf1">
                <Button
                  size="large"
                  className="bold1"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #6f1a8f, #6b1a8b, #671a87, #641983, #60197f)",
                    border: "0px",
                    color: "white"
                  }}
                >
                  <img className="img-user-cuts" src={b} alt="sun pic" />
                  Lunch
                </Button>
              
                </div>
                </div>
                <div className="size2">
                  <div className="disf1">
                    
                    <Button
                      size="large"
                      className="bold1"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #561771, #51156b, #4d1265, #481060, #440e5a)",
                        border: "0px",
                        color: "white"
                      }}
                    >
                      Dinner
                      <img className="img-user-cuts" src={a} alt="moon pic" />
                    </Button>
                  </div>
                </div>
              </div> */
}
