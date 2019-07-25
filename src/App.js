import React from "react";
import "./App.css";
import logo from "./mystyles/logo.png";
import style from "./mystyles/style.module.css";
import Screen from "./components/Screen";
function App() {
  return (
    <div className="App">
      <div className={style.container}>
        <img className={style.logo} src={logo} alt="Calculator Logo" />
        <h3 className={style.title}>Welcome To The React Calculator</h3>
        <Screen />
      </div>
    </div>
  );
}

export default App;
