import React, { Component } from "react";
import { Card, Button, Row, Col, DatePicker, Modal, Tabs, Radio } from "antd";
import { Redirect } from "react-router-dom";
import "./index.css";
import a from "../../Res/moon.png";
import b from "../../Res/sun.png";
import c from "../../Res/calander.png";
import d from "../../Res/user.png";
import e from "../../Res/edit.png";
import f from "../../Res/settings.png";

const { RangePicker } = DatePicker;

export default class UserCuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
      loading: false,
      visible: false
    };
  }

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
      <div className="control" style={{ padding: "10px" }}>
        <Card className="car1dis">
          <p className="bold1" style={{ fontSize: "20px" }}>
            Late Mess
          </p>
          <div className="disf1">
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
                {/* <div><img src={b} alt='sun pic'/></div> */}
                {/* <div className='bold1' style={{paddingLeft:'10px'}}><p>Lunch</p></div> */}
              </div>
            </div>
            <div className="size2">
              <div className="disf1">
                {/* <div><p className='bold1' style={{paddingRight:'10px'}}>Dinner</p></div> */}
                {/* <div><img src={a} alt='moon pic' onClick={this.showModal}/></div> */}
                {/* <Modal
                  visible={visible}
                  title="Dinner Mess Cut"
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={[
                    <Button key="back" onClick={this.handleCancel}>Return</Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                      Yes
                    </Button>,
                  ]}
              >
                <p className='modtext'>Are you sure you want a late mess?</p>

              </Modal> */}
                {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                  <Radio.Button value="top">Horizontal</Radio.Button>
                  <Radio.Button value="left">Vertical</Radio.Button>
                </Radio.Group> */}
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
          </div>
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
          <p className="bold1 " style={{ fontSize: "20px" }}>
            Mess Cut
          </p>
          <div className="disf1">
            <div className="size3">
              <p className="bold2" style={{ fontSize: "21px" }}>
                FROM
              </p>
              {/* <img onClick={onFromDate}src={c} alt='datepic'/> */}
              {/* <DatePicker onChange={onChange} /> */}
            </div>
            <div className="size4">
              <p className="bold2" style={{ fontSize: "21px" }}>
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
          <p className="grey" style={{ fontSize: "20px" }}>
            Mess Cut History
          </p>
        </div>

        <br />
        <div className="car3dis">
          <div className="disf1">
            <div className="size5">
              <p className="bold1">
                You have reuested mess cut from dd/mm/yy to dd/mm/yy
              </p>
            </div>
            <div className="size6">
              <p className="bold1">Effective Total</p>
              <p className="bold2" style={{ fontSize: "25px" }}>
                3.6
              </p>
            </div>
          </div>
        </div>
        <div className="bottomtab">
          <Row style={{ marginTop: "-8px" }}>
            <Col span={8}>
              {" "}
              <img
                className="hov"
                style={{ marginLeft: "35px" }}
                onClick={this.onUserClick}
                src={d}
                alt="user pic"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                className="hov"
                style={{ marginLeft: "35px" }}
                onClick={this.onEditClick}
                src={e}
                alt="edit pic"
              />
            </Col>
            <Col span={8}>
              {" "}
              <img
                className="hov"
                style={{ marginLeft: "35px" }}
                onClick={this.onSettingsClick}
                src={f}
                alt="settings pic"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
