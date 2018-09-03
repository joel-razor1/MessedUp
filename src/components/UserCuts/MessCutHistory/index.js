import React, { Component } from "react";
import "./index.css";
import { List, ListItem } from "material-ui/List";
import { auth, db } from "../../../util/config";
import { Icon } from "antd";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "J71tA5o0C9OyUXzBEtXpNBndX052",
      mess: "sahara",
      messno: "444",
      cuts: []
    };
  }

  componentDidMount() {
    var that = this;
    db.ref(this.state.mess)
      .child("users")
      .child("messcuts")
      .child(this.state.messno)
      .on("value", function(data) {
        const cuts = [];
        data.forEach(element => {
          var d = {
            from: element.val().from,
            to: element.val().to,
            count: element.val().count,
            key: element.key
          };
          cuts.push(d);
        });
        that.setState({ cuts });
        console.log("cuts", cuts);
      });
  }

  getDate = d => {
    var date = new Date(d);
    console.log("date", date);

    return (
      "" + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
    );
  };

  render() {
    return (
      <div className="history-main">
        <List>
          {this.state.cuts.map(item => {
            return (
              <div className="history-items" key={item.key}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <h3>From:</h3>

                    {this.getDate(item.from)}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <h3>To:</h3>
                    {this.getDate(item.to)}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <h3>Days:</h3>

                    <div style={{ textAlign: "center" }}>{item.count}</div>
                  </div>
                  <div className="history-delete">
                    <Icon type="delete" />
                  </div>
                </div>
              </div>
            );
          })}
        </List>
      </div>
    );
  }
}