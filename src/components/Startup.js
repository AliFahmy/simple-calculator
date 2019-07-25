import React from "react";
import logo from "../mystyles/logo.png";
import style from "../mystyles/style.module.css";
export default function Startup() {
  return (
    <div>
      <img className={style.startup} src={logo} alt="logo" />
    </div>
  );
}
