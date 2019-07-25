import React, { Component } from "react";
import Number from "./Number";
import style from "../mystyles/style.module.css";
import Symbol from "./Symbol";
import { evaluate } from "mathjs";
class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: ""
    };
  }
  UpdateScreen = value => {
    this.setState({ expression: this.state.expression + "" + value });
  };
  Reset = () => {
    this.setState({ expression: "" });
  };
  isOperator = value => {
    if (value === "-" || value === "+" || value === "/") return true;
    return false;
  };
  evaluate = () => {
    let expression = this.state.expression;
    if (this.isOperator(expression[0])) {
      alert("Please Enter A Right Format");
      return;
    }
    let answer = eval(expression);
    this.setState({ expression: answer });
  };
  render() {
    return (
      <div>
        <div className={style.screen}>
          <h3 className={style.expression}>{this.state.expression}</h3>
        </div>
        <div onClick={this.Reset} className={style.word}>
          Clear !
        </div>
        <div>
          <div className={style.row}>
            <Number num={1} update={this.UpdateScreen} />
            <Number num={2} update={this.UpdateScreen} />
            <Number num={3} update={this.UpdateScreen} />
          </div>
          <div className={style.row}>
            <Number num={4} update={this.UpdateScreen} />
            <Number num={5} update={this.UpdateScreen} />
            <Number num={6} update={this.UpdateScreen} />
          </div>
          <div className={style.row}>
            <Number num={7} update={this.UpdateScreen} />
            <Number num={8} update={this.UpdateScreen} />
            <Number num={9} update={this.UpdateScreen} />
          </div>
          <div className={style.row}>
            <Number num={0} update={this.UpdateScreen} />
          </div>
        </div>
        <div id="Symbols" className={style.row}>
          <Symbol styling={style} symbol={"="} evaluate={this.evaluate} />
          <Symbol styling={style} symbol={"+"} func={this.UpdateScreen} />
          <Symbol styling={style} symbol={"-"} func={this.UpdateScreen} />
          <Symbol styling={style} symbol={"/"} func={this.UpdateScreen} />
        </div>
      </div>
    );
  }
}

export default Screen;
