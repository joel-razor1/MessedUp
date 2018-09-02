import React, { Component } from "react";
import "./index.css";
import Home from "../Home";
import logo from "../../Res/logo_text_w.png";
export default class extends Component {
  render() {
    return (
      <div className="">
        <div className="main-appbar">
          <img src={logo} />
        </div>

        <div
          style={{
            width: "100%",
            height: 100,
            marginTop: -50
          }}
        >
          <Home />
        </div>
      </div>
    );
  }
}

// background: #04af13; /* Old Browsers */
// background: -webkit-linear-gradient(
//   top right,
//   #04af13,
//   #034475
// ); /*Safari 5.1-6*/
// background: -o-linear-gradient(top right, #04af13, #034475); /*Opera 11.1-12*/
// background: -moz-linear-gradient(top right, #04af13, #034475); /*Fx 3.6-15*/
// background: linear-gradient(top right, #04af13, #034475); /*Standard*/
