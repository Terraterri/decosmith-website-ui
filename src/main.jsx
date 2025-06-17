import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     {/* <BrowserRouter> */}
    {/* <BrowserRouter basename="dekorlane/website/"> */}
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
