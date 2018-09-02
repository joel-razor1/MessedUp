import React, { Component } from "react";
import './index.css'
import logo from "../../Res/logo_text_w.png"
import { Switch, Button, Icon,message} from "antd"
import { Link } from "react-router-dom"
import {auth} from "../../util/config"


const About = () => {
  return (
    <div>
      <hr style={{ width: "350px", color: "#e6e6e6", opacity: "0.5" }} />
      <div><div>version</div><div>2.0</div></div>

      <hr style={{ width: "350px", color: "#e6e6e6", opacity: "0.5" }} />
      <h4 style={{ color: "white" }}>Follow Us At</h4>
      <div style={{ fontSize: "30px" }}>
        <a href="https://github.com/akshaycj" style={{ color: "white" }}><Icon style={{ padding: "10px", cursor: "pointer" }} type="github" /></a>
        <a href="https://twitter.com/akshay_cj" style={{ color: "white" }}><Icon style={{ padding: "10px", cursor: "pointer" }} type="twitter" /></a>
       <a href="" style={{ color: "white" }}> <Icon style={{ padding: "10px", cursor: "pointer" }} type="medium" /></a>
       <a href="https://www.facebook.com/akshay.cj1?ref=br_rs" style={{ color: "white" }}> <Icon style={{ padding: "10px", cursor: "pointer" }} type="facebook" /></a>
        <a href="https://www.instagram.com/akshay.cj/" style={{ color: "white" }}><Icon style={{ padding: "10px", cursor: "pointer" }} type="instagram" /></a>
      </div>
    </div>
  )
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }

  }
  onDisplay = () => {
    this.setState({ display: !this.state.display })
  }
  onSignout = () => {
    auth.signOut().then(function() {
      // Sign-out successful.
      message.success('This is a message of success');

    }).catch(function(error) {
      // An error happened.
      message.error('This is a message of error');

    });

  }
  onFood = (e) => {
    console.log("foodpref")
  }
  render() {

    return (
      <div className="settings-main" >
        <div><img style={{ width: "320px", padding: "10px" }} src={logo} /></div>
        <h3 style={{ color: "white" }}>Settings</h3>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <hr style={{ width: "340px", color: "#e6e6e6", opacity: "0.5" }} />
        <div className="settings-sub"><h3 style={{ color: "#fff" }}>Food Preference</h3> <Switch checkedChildren="Non-Veg" unCheckedChildren="Veg" onChange={this.onFood} /></div>
        <hr style={{ width: "350px", color: "#fff", opacity: "0.5" }} />
        <div><Link to="/"><h3 style={{ color: "#fff", cursor: "pointer" }}>Profile</h3></Link></div>
        <hr style={{ width: "350px", color: "#e6e6e6", opacity: "0.5" }} />
        <div><h3 style={{ color: "#fff", cursor: "pointer" }} onClick={this.onDisplay}>About</h3>
          {this.state.display ? <h5 style={{ color: "white", padding: "10px" }} >Messed Up is an app that helps in the mess management effectively</h5> : null}
        </div>
        <About />
        <hr style={{ width: "350px", color: "#e6e6e6", opacity: "0.5" }} />
        <div><Button style={{ borderRadius: "10px" }} onClick={this.onSignout}>Sign Out</Button></div>
      </div>
    );
  }
}
