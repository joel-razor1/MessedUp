import React, { Component } from "react";
import "./index.css";
import logo from "../../Res/logo_text_w.png";
import { Switch, Button, Icon, message } from "antd";
import { Link } from "react-router-dom";
import { auth } from "../../util/config";
import joel from "../../Res/joel.jpg"
import cj from "../../Res/cj.jpg"
import sn from "../../Res/sn.jpg"
const About = () => {
  return (
    <div>
      <hr style={{ width: "90%", color: "#e6e6e6", opacity: "0.5" }} />
      <div>
        <div>version</div>
        <div>2.0</div>
      </div>

      <hr style={{ width: "90%", color: "#e6e6e6", opacity: "0.5" }} />
      <h4 style={{ color: "white" }}>Follow Us At</h4>
      <div style={{ fontSize: "30px" }}>
        <a href="https://github.com/akshaycj" style={{ color: "white" }}>
          <Icon style={{ padding: "10px", cursor: "pointer" }} type="github" />
        </a>
        <a href="https://twitter.com/akshay_cj" style={{ color: "white" }}>
          <Icon style={{ padding: "10px", cursor: "pointer" }} type="twitter" />
        </a>
        <a href="" style={{ color: "white" }}>
          {" "}
          <Icon style={{ padding: "10px", cursor: "pointer" }} type="medium" />
        </a>
        <a
          href="https://www.facebook.com/akshay.cj1?ref=br_rs"
          style={{ color: "white" }}
        >
          {" "}
          <Icon
            style={{ padding: "10px", cursor: "pointer" }}
            type="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/akshay.cj/"
          style={{ color: "white" }}
        >
          <Icon
            style={{ padding: "10px", cursor: "pointer" }}
            type="instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      checked: true
    };
  }
  onDisplay = () => {
    this.setState({ display: !this.state.display });
  };
  onSignout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        message.success("This is a message of success");
      })
      .catch(function (error) {
        // An error happened.
        message.error("This is a message of error");
      });
  };
  onFood = e => {
    console.log("foodpref");
    this.setState({ checked: e });
  };
  render() {
    return (
      <div className="settings-main">
        <h3 style={{ color: "white", fontSize: 22 }}>Settings</h3>
        <div style={{ display: "flex", justifyContent: "center" }} />
        <hr style={{ width: "90%", color: "#e6e6e6", opacity: "0.5" }} />
        <div className="settings-sub">
          <h3 style={{ color: "#fff" }}>Food Preference</h3>{" "}
          <Switch
            checked={this.state.checked}
            checkedChildren="Non-Veg"
            unCheckedChildren="Veg"
            onChange={this.onFood}
          />
        </div>
        <hr style={{ width: "90%", color: "#fff", opacity: "0.5" }} />
        <div>
          <Link to="/">
            <h3 style={{ color: "#fff", cursor: "pointer" }}>Profile</h3>
          </Link>
        </div>
        <hr style={{ width: "90%", color: "#e6e6e6", opacity: "0.5" }} />
        <div>
          <h3
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={this.onDisplay}
          >
            About
          </h3>
          {this.state.display ?

            <div>
              <h5 style={{ color: "white", padding: "10px" }}>
                Messed Up is an app that helps in the mess management effectively
          </h5>
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <h3 style={{color:"white"}}>The Team</h3>
                <div style={{ display: "flex", marginTop: "-35px" }}>
                  <div class="tc pa4" >
                    <img src={cj} class="br-100  h3 w3" alt="avatar" />
                   <h6 style={{color:"white"}}>Akshay CJ</h6> 
                  </div>
                  <div class="tc pa4">
                    <img src="http://tachyons.io/img/logo.jpg" class="br-100  h3 w3" alt="avatar" />
                  <h6 style={{color:"white"}}>Adhil Juvane</h6>
                  </div>
                  <div class="tc pa4">
                    <img src={joel} class="br-100  h3 w3" alt="avatar" />
                    <h6 style={{color:"white"}}>Joel Johnson</h6>
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "-15%",justifyContent:"center" }}>
                  <div class="tc pa4">
                    <img src="http://tachyons.io/img/logo.jpg" class="br-100  h3 w3" alt="avatar" />
                    <h6 style={{color:"white"}}>Akhil A M</h6>
                  </div>
                  <div class="tc pa4">
                    <img src={sn}class="br-100  h3 w3" alt="avatar" />
                    <h6 style={{color:"white"}}>Sachin Nair</h6>
                  </div>
                  <div class="tc pa4">
                    <img src="http://tachyons.io/img/logo.jpg" class="br-100  h3 w3" alt="avatar" />
                    <h6 style={{color:"white"}}>Karthik sankar</h6>
                  </div>
                </div>
              </div>
            </div>

            : null}
        </div>
        <About />
        <hr style={{ width: "90%", color: "#e6e6e6", opacity: "0.5" }} />
        <div>
          <Button style={{ borderRadius: "10px" }} onClick={this.onSignout}>
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
}
