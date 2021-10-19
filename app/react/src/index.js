import React from "react";
import ReactDOM from "react-dom";
import Form from "./pages/Form/index";
import "./global.css";
import Login from "./pages/Login";
import Adm from "./pages/Adm";

ReactDOM.render(
  <React.StrictMode>
    {/* <Form /> */}
    {/* <Login /> */}
    <Adm />
  </React.StrictMode>,
  document.getElementById("root")
);
