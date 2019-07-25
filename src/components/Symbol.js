import React, { Component } from "react";

class Symbol extends Component {
  render() {
    return (
      <div className={this.props.styling.element} onClick={this.Clicked}>
        {this.props.symbol}
      </div>
    );
  }
  Clicked = () => {
    if (this.props.symbol === "=") this.props.evaluate();
    else this.props.func(this.props.symbol);
  };
}

export default Symbol;
