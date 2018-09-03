import React, { Component } from "react";
import './index.css'
import error from "../../Res/404.png"
import {Link} from "react-router-dom"

export default class  extends Component {

  render() {

    return (
      <div className="error-main" >
      <img className="error-image" src={error}/>
      <h1 style={{color:"black",fontSize:"50px",fontWeight:"20px"}}>Oh no !</h1>
      <h3 style={{color:"black",fontSize:"30px",fontWeight:"20px"}}>There's not much left here for you </h3>
      <Link to="/"><h1><u>Go Back</u></h1></Link>
      </div>
    )
  }
}
