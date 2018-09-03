import React, { Component } from "react";
import { Card, Button, Row, Col, Modal, Tabs, Radio, message } from "antd";
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
import DatePicker from "material-ui/DatePicker";
import { auth, db } from "../../util/config";
import MessCutsHistory from "./MessCutHistory";

//const { RangePicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const recentsIcon = <Icon type="home" />;
const favoritesIcon = <Icon type="edit" />;
const nearbyIcon = <Icon type="setting" />;

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export default class UserCuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
      loading: false,
      visible: false,
      selectedIndex: 0,
      from: "",
      to: "",
      diff: "",
      uid: "",
      mess: "",
      messno: ""
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

  onTo = (e, date) => {
    console.log("to:", date);

    if (this.state.from != "") {
      var arr = this.getDates(this.state.from, date);
      console.log("dif", arr.length);

      this.setState({ to: date, diff: arr.length });
    }

    this.state.from == ""
      ? message.warn("Mind selecting the other date?")
      : null;
  };

  onFrom = (e, date) => {
    console.log("from", date);
    this.setState({ from: date });
  };

  componentDidMount() {
    var that = this;

    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log("user", user.uid);

        that.setState({ uid: user.uid });

        db.ref("users")
          .child(user.uid)
          .on("value", function(data) {
            that.setState({
              mess: data.val().mess,
              messno: data.val().messno
            });
          });
      }
    });
  }

  onMessCut = () => {
    var from = this.state.from;
    var to = this.state.to;
    var diff = this.state.diff;
    from != "" && to != "" && diff > 0
      ? this.onMessCutSuccess(from, to, diff)
      : message.error("Your'e clearly not taking this seriously");
  };

  formatNum = n => {
    return ("0" + n).slice(-2);
  };

  getDates(startDate, stopDate) {
    console.log("dated");

    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  getDisabledDates = () => {
    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate;
  };

  onMessCutSuccess = (f, t, diff) => {
    var that = this;
    var d = new Date();
    var arr = this.getDates(f, t);
    console.log("arr", arr);

    arr.forEach(function(data) {
      db.ref(that.state.mess)
        .child("messcuts")
        .child(data.getYear())
        .child(data.getMonth())
        .child(data.getDate())
        .child(that.state.messno)
        .set({ num: that.state.messno, time: d.getTime() });
    });

    var dateFrom = this.formatNum(f.getDate());
    var monthFrom = this.formatNum(f.getMonth());
    var yearFrom = f.getYear();

    var dateTo = this.formatNum(t.getDate());
    var monthTo = this.formatNum(t.getMonth());
    var yearTo = t.getYear();

    var from = dateFrom + monthFrom + yearFrom;
    var to = dateTo + monthTo + yearTo;

    var data = {
      from: "" + f.toDateString(),
      to: "" + t.toDateString(),
      count: diff
    };
    db.ref(this.state.mess)
      .child("users")
      .child("messcuts")
      .child(this.state.messno)
      .push()
      .set(data);
    message.success("Valar Morghulis");
  };

  render() {
    // const { mode } = this.state;
    const { visible, loading } = this.state;

    return (
      <div className="control">
        <div className="car1dis">
          <p
            className="bold1"
            style={{
              fontSize: "20px",
              color: "white",
              alignSelf: "flex-start"
            }}
          >
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
                backgroundColor: "transparent",
                color: "white",

                height: 35,
                width: "45%"
              }}
            >
              <img className="img-user-cuts" src={b} alt="sun pic" />
              Lunch
            </RadioButton>
            <hr
              style={{
                width: "90px",
                border: "0px",
                backgroundColor: "#fff",
                height: "1px",
                transform: "rotate(90deg)"
              }}
            />
            <RadioButton
              value="dinner"
              style={{
                backgroundColor: "transparent",
                color: "white",

                height: 35,
                width: "45%"
              }}
            >
              <img className="img-user-cuts" src={a} alt="sun pic" />
              Dinner
            </RadioButton>
          </RadioGroup>
          <br />
          <br />

          <div
            className="but1"
            style={{
              color:
                "linear-gradient(to right, #7a209c, #6b1c8a, #5d1878, #4f1466, #411055)",
              fontWeight: "bold"
            }}
          >
            Save my Food
          </div>
        </div>

        <div className="car2dis">
          <p className="bold1 " style={{ fontSize: "20px", color: "white" }}>
            Mess Cut
          </p>
          <div className="fromto">
            <DatePicker
              onChange={this.onFrom}
              textFieldStyle={{
                width: "100%",
                color: "white"
              }}
              locale="en-US"
              inputStyle={{ color: "white" }}
              floatingLabelText="From"
              autoOk={true}
              minDate={this.getDisabledDates()}
            />
            <hr
              style={{
                width: "50px",
                border: "0px",
                backgroundColor: "#fff",
                height: "1px",
                transform: "rotate(90deg)"
              }}
            />
            <DatePicker
              textFieldStyle={{ width: "100%", color: "white" }}
              onChange={this.onTo}
              inputStyle={{ color: "white" }}
              floatingLabelText="To"
              autoOk={true}
              locale="en-US"
              minDate={this.getDisabledDates()}
            />
          </div>
          <div>
            {this.state.diff != "" ? (
              <h3 style={{ color: "white" }}>{this.state.diff} days</h3>
            ) : null}
          </div>
          <div
            className="but1 but2"
            style={{
              marginTop: 10,
              color:
                "linear-gradient(to right, #7a209c, #6b1c8a, #5d1878, #4f1466, #411055)",
              fontWeight: "bold"
            }}
            onClick={this.onMessCut}
          >
            Request
          </div>
        </div>
        <br />

        <div className="but-3">
          <p className="grey" style={{ fontSize: "20px" }}>
            Mess Cut History
          </p>
        </div>
        <br />
        <div style={{ marginBottom: 100, marginTop: -20 }}>
          <MessCutsHistory />
        </div>
      </div>
    );
  }
}

// background-image: linear-gradient(
//   to right,
//   #8d25aa,
//   #af109b,
//   #c9008a,
//   #dc0077,
//   #e91d64
// );

// <div className="car3dis">
// <div className="disf1">
//   <div className="size5">
//     <p className="bold1" style={{ color: "white" }}>
//       You have reuested mess cut from dd/mm/yy to dd/mm/yy
//     </p>
//   </div>
//   <div className="size6">
//     <p className="bold1" style={{ color: "white" }}>
//       Effective Total
//     </p>
//     <p className="bold2" style={{ fontSize: "25px", color: "white" }}>
//       3.6
//     </p>
//   </div>
// </div>
// </div>
