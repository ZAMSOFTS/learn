import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import bgvid from "./images/cricket.mp4";
import css from "./index.css";

ReactDOM.render(
  <>
    <div className="vid">
      <video autoPlay loop muted>
        <source src={bgvid} type="video/mp4" />
      </video>
    </div>
    <App />
  </>,
  document.getElementById("root")
);
