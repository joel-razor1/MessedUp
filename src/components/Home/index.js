import React, { Component } from "react";
import "./index.css";
import { Card, Row, Col } from "antd";

import a from "../../Res/user.svg";
import b from "../../Res/edit.svg";
import c from "../../Res/settings.svg";
import d from "../../Res/joel.jpg";
import e from "../../Res/cash.png";
import { auth, db } from "../../util/config.js";
import TweenOne from "rc-tween-one";
import Children from "rc-tween-one/lib/plugin/ChildrenPlugin";

TweenOne.plugins.push(Children);

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
      mess: "",
      uid: "",
<<<<<<< Updated upstream
      foodpref : "" ,
      loading: true
=======
      loading: true,
      bill: "1500",
      animation: null
>>>>>>> Stashed changes
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

    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log("user", user.uid);

        that.setState({ uid: user.uid });
        that.setState({
          animation: {
            Children: {
              value: that.state.bill || 10000,
              floatLength: 2,
              formatMoney: true
            },
            duration: 1000
          }
        });

        db.ref("users")
          .child(user.uid)
          .on("value", function(data) {
            that.setState({
              userName: data.val().name,
              userEmail: data.val().email,
              userMobile: data.val().phone,
              userMessNo: data.val().messno,
              userDep: data.val().dept,
              mess: data.val().mess,
              foodpref : data.val().foodpref,
            });
            that.fetchNotices();
          });
      }
    });
  }

  fetchNotices = () => {
    var that = this;
    db.ref(this.state.mess)
      .child("notices")
      .on("value", function(data) {
        var notices = [];
        data.forEach(function(child) {
          notices.push(child.val());
        });
        that.setState({ notices: notices.reverse(), loading: false });
        console.log("notices", notices);
      });
  };

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
                    <p style={{ color: "white" }}>{this.state.foodpref}</p>
                  </div>
                  <div className="marginl1">
                    <p style={{ color: "white" }}>Messcut 2</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="userdetail2">
                <TweenOne
                  style={{ color: "white", fontSize: 24 }}
                  className="bold3"
                  animation={this.state.animation}
                >
                  0
                </TweenOne>
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
        {this.state.loading ? (
          <div>
            <Card
              loading
              style={{
                width: 320,
                maxWidth: "95%",
                margin: "auto",
                minHeight: 120
              }}
            />
            <br />
            <Card
              loading
              style={{
                width: 320,
                maxWidth: "95%",
                margin: "auto",
                minHeight: 120
              }}
            />
          </div>
        ) : (
          <div>
            <div className="fatherroundone">
              <div className="roundone">
                <div className="marginless">
                  <text className="roundtextAUG">
                    {monthNames[date1.getMonth()]}
                  </text>
                </div>
                <div className="marginless1">
                  <p className="roundtext15">{date1.getDate()}</p>
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
                  <p className="roundtext15">{date2.getDate()}</p>
                </div>
              </div>
            </div>
            <div className="notice2">
              <h2 style={{ color: "white" }}>{this.state.notices[1].title}</h2>
              <p style={{ color: "white" }}>{this.state.notices[1].msg}</p>
            </div>
          </div>
        )}
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
