import React, { useState } from "react";
import "./index.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h1 className="heading">Time Baun tez guzarna paya ne jee</h1>
      <div className="container">
        <h1 className="head">{cTime}</h1>
      </div>
    </>
  );
};

export default App;
