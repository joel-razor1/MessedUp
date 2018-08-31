import React, { Component } from "react";
import "./index.css";
import { Card, Row, Col } from "antd";
import a from "../../Res/user.png";
import b from "../../Res/edit.png";
import c from "../../Res/settings.png";
import d from "../../Res/joel.jpg";
import e from "../../Res/cash.png";
import { Auth, db } from "../../util/config.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [
        { date: "", msg: "", title: "" },
        { date: "", msg: "", title: "" }
      ],
      userinfo: [{ dep: "", email: "", messno: "", mobile: "", name: "" }],
      userName: "",
      userMobile: "",
      userMessNo: "",
      userEmail: "",
      userDep: "",
      uid: "dtqYpqgw79XcmaBucfY4XYcp88m1"
    };
  }

  onUserClick = () => {
    console.log("user clicked");
  };

  onEditClick = () => {
    console.log("edit clicked");
  };

  onSettingsClick = () => {
    console.log("settings clicked");
  };

  onClickPay = () => {
    console.log(" pay clicked");
  };

  componentDidMount() {
    var that = this;
    // importing notices
    db.ref("sahara")
      .child("notices")
      .on("value", function(data) {
        var notices = [];
        data.forEach(function(child) {
          notices.push(child.val());
        });
        that.setState({ notices: notices.reverse() });
        console.log("notices", notices);
      });

    db.ref("users")
      .child("dtqYpqgw79XcmaBucfY4XYcp88m1")
      .on("value", function(data) {
        that.setState({
          userName: data.val().name,
          userEmail: data.val().email,
          userMobile: data.val().mob,
          userMessNo: data.val().messno,
          userDep: data.val().dep
        });
      });
  }

  render() {
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ];

    var date1 = new Date(this.state.notices[0].date);
    var date2 = new Date(this.state.notices[1].date);

    return (
      <div>
        <Card className="userdetail">
          <Row>
            <Col span={16}>
              <div className="userdetail1">
                <div className="displayinflx">
                  <div className="marginl">
                    <p style={{ color: "white" }} className="bold1">
                      {this.state.userName}
                    </p>
                    <p style={{ color: "white" }} className="bold2">
                      MESS No. {this.state.userMessNo}
                    </p>
                  </div>
                </div>
                <div className="displayinflx">
                  <div>
                    <p style={{ color: "white" }}>Non-veg</p>
                  </div>
                  <div className="marginl1">
                    <p style={{ color: "white" }}>Messcut 2</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="userdetail2">
                <p style={{ color: "white" }} className="bold3">
                  1500
                </p>
                <p style={{ color: "white" }} className="nobold4">
                  Due till date
                </p>
              </div>
            </Col>
          </Row>
        </Card>
        <div className="billpay">
          <div className="displayinflx1">
            <div>
              <img className="img-home" src={e} alt="cash pic" />
            </div>
            <div className="marginl">
              <p onClick={this.onClickPay} className="greentext">
                Pay Bill
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          <p className="blacktext">Notice</p>
        </div>
        <div className="fatherroundone">
          <div className="roundone">
            <div className="marginless">
              <text className="roundtextAUG">
                {monthNames[date1.getMonth()]}
              </text>
            </div>
            <div className="marginless1">
              <p style={{ color: "white" }} className="roundtext15">
                {date1.getDate()}
              </p>
            </div>
          </div>
        </div>
        <div className="notice1">
          <h2 style={{ color: "white" }}>{this.state.notices[0].title}</h2>
          <p style={{ color: "white" }}>{this.state.notices[0].msg}</p>
        </div>

        <div className="fatherroundone">
          <div className="roundone2">
            <div className="marginless">
              <text className="roundtextAUG">
                {monthNames[date2.getMonth()]}
              </text>
            </div>
            <div className="marginless1">
              <p style={{ color: "white" }} className="roundtext15">
                {date2.getDate()}
              </p>
            </div>
          </div>
        </div>
        <div className="notice2">
          <h2>{this.state.notices[1].title}</h2>
          <p style={{ color: "white" }}>{this.state.notices[1].msg}</p>
        </div>
        <Card className="bottomtab">
          <Row style={{ marginTop: "-20px" }}>
            <Col span={8}>
              {" "}
              <img
                className="hov"
                className="img-home"
                style={{ marginLeft: "35px" }}
                onClick={this.onUserClick}
                src={a}
                alt="user pic"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                className="hov"
                className="img-home"
                style={{ marginLeft: "35px" }}
                onClick={this.onEditClick}
                src={b}
                alt="edit pic"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                className="hov"
                className="img-home"
                style={{ marginLeft: "35px" }}
                onClick={this.onSettingsClick}
                src={c}
                alt="settings pic"
              />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

// background-image: linear-gradient(
//   to right,
//   #0276c1,
//   #288bd0,
//   #42a0df,
//   #5bb6ed,
//   #74cbfb
// );
