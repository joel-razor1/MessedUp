import React, { Component } from "react";
import "./index.css";
import logo from "../../Res/logo_text_w.png";
import { Switch, Button, Icon, message ,Spin} from "antd";
import { auth, db } from "../../util/config.js";
import { Link } from "react-router-dom";
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
      checked: true ,
      uid : "" ,
      done:false ,
      messno : 0 ,
    };
  }

  componentDidMount(){
    var that = this ;
    auth.onAuthStateChanged(function(user){
      if(user){
        db.ref('users').child(user.uid).on("value", function(data){
          that.setState({uid : user.uid , messno : data.val().messno})
          if(data.val().foodpref === "veg"){
            that.setState({checked:false})
            console.log("false",false);
          }
          that.setState({done:true})
        })
      }
    })
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
    console.log("foodpref",e);
    var uid = this.state.uid ;
    var messno = this.state.messno ;
    this.setState({ checked: e });
    // db.ref('sahara').child('users').child('mess').child('${this.state.messno}').on("value",function(data){
    //   if( e === true ){
    //     data.foodpref = "veg" ;
    //   }
    //   else{
    //     data.foodpref = "non" ;
    //   }
    // })
    console.log("uid",uid);

    db.ref('users').child(uid).child('foodpref').set(e?'non':'veg');
    db.ref('sahara').child('users').child('mess').child(messno).child('foodpref').set(e?'non':'veg');
  };

  render() {
    var checked = this.state.checked ;
    // console.log("check",checked);
    return (
      <div className="settings-main">
        <h3 style={{ color: "white", fontSize: 22 }}>Settings</h3>
        <div style={{ display: "flex", justifyContent: "center" }} />
        <hr style={{ width: "90%", color: "#e6e6e6", opacity: "0.5" }} />
        <div className="settings-sub">
          <h3 style={{ color: "#fff" }}>Food Preference</h3>{" "}
          {this.state.done?<Switch
            checkedChildren="Non-Veg"
            unCheckedChildren="Veg"
            checked={this.state.checked?true:false}
            onChange={this.onFood}
            defaultChecked={true}
          />:<Spin />}
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
