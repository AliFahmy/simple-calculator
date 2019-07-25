import React, { Component } from "react";
import style from "../mystyles/style.module.css";
class Number extends Component {
  render() {
    return (
      <label className={style.element} onClick={this.Clicked}>
        {this.props.num}
      </label>
    );
  }
  Clicked = () => {
    this.props.update(this.props.num);
  };
}

export default Number;
