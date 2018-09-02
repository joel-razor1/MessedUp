import React, { Component } from "react";
import "./index.css";
import { Card, Icon, message, Input, Steps, Button, Select, Spin } from "antd";
import front from "../../Res/front.png";
import { fb, auth, provider, db } from "../../util/config";
import firebase from "firebase";
import TextField from "material-ui/TextField";
import { Redirect } from "react-router-dom";

const Step = Steps.Step;
const Option = Select.Option;

const steps = [
  {
    title: "First",
    content: "First-content"
  },
  {
    title: "Second",
    content: "Second-content"
  },
  {
    title: "Last",
    content: "Last-content"
  }
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spin: false,
      click: false,
      uid: "",
      email: "",
      newUser: false,
      redirect: false,
      name: "",
      dep: "",
      mob: "",
      mobX: "",
      mess: "",
      messno: "",
      current: 0,
      otpSpin: true,
      otp: ""
    };
  }

  next() {
    var that = this;
    const current = this.state.current + 1;
    this.setState({ current });
    if (current == 1) {
      db.ref(this.state.mess)
        .child("pre")
        .child(this.state.messno)
        .on("value", function(data) {
          var num = data.val().mobile;
          var mob = "+91" + num;
          console.log("mob:", mob);

          that.setState({ mobX: data.val().mobile, otpSpin: false, mob });
          that.onCreate();
        });
    }

    if (current == 2) {
      var code = this.state.otp;
      if (code != "") {
        window.confirmationResult
          .confirm(code)
          .then(function(result) {
            // User signed in successfully.
            var user = result.user;
            console.log("user.uid", user.uid);
            var data = {
              name: that.state.name,
              email: that.state.email,
              messno: that.state.messno,
              mess: that.state.mess,
              mob: that.state.mob,
              dep: that.state.dep
            };
            db.ref("users")
              .child(that.state.uid)
              .set(data);
            db.ref("users")
              .child(user.uid)
              .set(data);
            db.ref(that.state.mess)
              .child("users")
              .child("mess")
              .child(that.state.messno)
              .set(data);

            // ...
          })
          .catch(function(error) {
            // User couldn't sign in (bad verification code?)
            // ...
          });
      }
    }
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleMess = val => {
    console.log("val", val);

    this.setState({ mess: val });
  };

  messnoChange = e => {
    this.setState({ messno: e.target.value });
  };
  nameChange = e => {
    this.setState({ name: e.target.value });
  };
  depChange = e => {
    this.setState({ dep: e.target.value });
  };
  emailChange = e => {
    this.setState({ email: e.target.value });
  };

  otpChange = e => {
    this.setState({ otp: e.target.value });
  };

  componentDidMount() {
    var self = this;

    auth
      .getRedirectResult()
      .then(function(result) {
        var uid = result.user.uid;
        var email = result.user.email;
        console.log("uid", uid);

        self.setState({ uid, email, spin: true });
        self.newUser();
      })
      .catch(function(error) {
        var errorMessage = error.message;
        self.state.click ? message.error(errorMessage) : null;
      });
  }

  newUser = () => {
    console.log("ethi");
    var that = this;
    db.ref("users")
      .child(this.state.uid)
      .on("value", function(data) {
        data.val() === null
          ? that.setState({ newUser: true, spin: false })
          : that.setState({ redirect: true, spin: false });
      });
  };

  onDone = () => {
    message.success("Processing complete!");
    this.setState({ redirect: true });
  };

  onSign = () => {
    this.setState({ click: true });
    auth.signInWithRedirect(provider);
  };

  onCreate = () => {
    var self = this;
    console.log("ivide1");
    window.recaptchaVerifier = new fb.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function(response) {
          console.log("ivide2");
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          self.sendOTP();
        }
      }
    );

    this.sendOTP();
  };

  sendOTP = () => {
    console.log("ivide");

    var phoneNumber = this.state.mob;
    var appVerifier = window.recaptchaVerifier;
    auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch(function(error) {
        // Error; SMS not sent
        console.log("errr", error);

        // ...
      });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="auth-main">
        <div className="auth-card">
          <div
            className="auth-card-inner"
            style={{
              justifyContent: "space-around"
            }}
          >
            <img
              style={{
                alignSelf: "center",
                transition: "align-self 2s ease-out "
              }}
              src={front}
              width={120}
              height={130}
            />
            {this.state.spin ? <Spin /> : null}
            <div id="recaptcha-container" />
            {this.state.newUser ? (
              <div style={{ marginTop: 5 }}>
                <Steps
                  style={{ display: "flex" }}
                  size="small"
                  direction="horizontal"
                  current={current}
                >
                  <Step key={1} title="Details" icon={<Icon type="form" />} />
                  <Step
                    key={2}
                    title="Verification"
                    icon={<Icon type="solution" />}
                  />
                  <Step key={3} title="Done" icon={<Icon type="smile-o" />} />
                </Steps>
                <div className="steps-content">
                  {current == 0 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: 8
                      }}
                    >
                      <Select
                        placeholder="Mess"
                        style={{ width: "100%" }}
                        onChange={this.handleMess}
                      >
                        <Option value="swaraj">Swaraj</Option>
                        <Option value="sahara">Sahara</Option>
                      </Select>
                      <Input
                        placeholder="Name"
                        style={{ margin: 5 }}
                        onChange={this.nameChange}
                      />
                      <Input
                        placeholder="E-mail"
                        value={this.state.email}
                        style={{ margin: 5 }}
                        onChange={this.emailChange}
                      />
                      <Input
                        placeholder="Mess Number"
                        style={{ margin: 5 }}
                        onChange={this.messnoChange}
                      />

                      <Input
                        placeholder="Dep: IT/SLS etc"
                        style={{ margin: 5 }}
                        onChange={this.depChange}
                      />
                    </div>
                  )}
                  {current == 0 && (
                    <div style={{ fontSize: 12 }}>
                      *Fill up everything, Don't make me say that again{" "}
                    </div>
                  )}

                  {current == 1 && (
                    <div>
                      {this.state.otpSpin ? (
                        <Spin style={{ marginTop: 20 }} />
                      ) : (
                        <div
                          style={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            alignItems: "center",
                            paddingTop: 20
                          }}
                        >
                          <h3>Enter your OTP sent to:</h3>
                          <h2>
                            {this.state.mobX.slice(0, 3)}
                            xxxxx
                            {this.state.mobX.slice(
                              this.state.mobX.length - 2,
                              this.state.mobX.length
                            )}
                          </h2>
                          <Input
                            style={{ width: "85%" }}
                            placeholder="OTP"
                            onChange={this.otpChange}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {current == 2 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        height: "100%",
                        marginTop: "auto",
                        marginBottom: "auto"
                      }}
                    >
                      <Icon
                        type="smile-o"
                        style={{
                          fontSize: "500%",
                          color: "green",
                          marginBottom: 5
                        }}
                      />
                      <p>
                        That was easy! Click Done <Icon type="arrow-down" /> to
                        continue
                      </p>
                    </div>
                  )}
                </div>
                <div className="steps-action">
                  {current > 0 && (
                    <div
                      className="prev-button"
                      style={{ marginRight: 8 }}
                      onClick={() => this.prev()}
                    >
                      &lt; Prev
                    </div>
                  )}
                  {current === steps.length - 1 && (
                    <div className="next-button" onClick={this.onDone}>
                      Done
                    </div>
                  )}
                  {current < steps.length - 1 && (
                    <div className="next-button" onClick={() => this.next()}>
                      Next >
                    </div>
                  )}
                </div>
              </div>
            ) : null}

            {this.state.newUser ? null : (
              <div className="auth-button" onClick={this.onSign}>
                <Icon type="google" style={{ fontSize: 26 }} />
                Signin with Google
              </div>
            )}
          </div>
        </div>
        {this.state.redirect ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}

// (
//   <div
//     className="auth-button"
//     style={{ justifyContent: "sapce-between" }}
//     onClick={this.onCreate}
//     id="sign-in-button"
//   >
//     Create your Profile
//     <Icon type="right" style={{ fontSize: 26 }} />
//   </div>
// )

// background: rgb(98, 101, 101); /* Old Browsers */
// background: -webkit-radial-gradient(
//   center,
//   rgb(98, 101, 101),
//   rgb(38, 42, 40)
// ); /*Safari 5.1-6*/
// background: -o-radial-gradient(
//   center,
//   rgb(98, 101, 101),
//   rgb(38, 42, 40)
// ); /*Opera 11.1-12*/
// background: -moz-radial-gradient(
//   center,
//   rgb(98, 101, 101),
//   rgb(38, 42, 40)
// ); /*Fx 3.6-15*/
// background: radial-gradient(
//   ellipse at center,
//   rgb(98, 101, 101),
//   rgb(38, 42, 40)
// ); /*Standard*/
