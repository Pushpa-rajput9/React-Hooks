import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UsestateArray from "./UsestateArray.jsx";
import UseStateObject from "./UseStateObject.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <UsestateArray />
    <UseStateObject />
  </React.StrictMode>
);
