import React, { Component } from "react";
import Item from "./Item";

export default class ListItem extends Component {
  render() {
    return (
      <div className="container text-center px-0">
        <div className="row">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
    );
  }
}
