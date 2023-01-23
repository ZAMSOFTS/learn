import React from "react";
import css from "./index.css";

let datu = new Date();
datu = datu.getHours();

let greeting = "";
const ztile = {};

if (datu > 4 && datu < 12) {
  greeting = "Good Morning";
  ztile.color = "green";
} else if (datu >= 12 && datu < 18) {
  greeting = "Good Afternoon";
  ztile.color = "red";
} else if (datu >= 18 && datu <= 24) {
  greeting = "Good Night";
  ztile.color = "black";
}

function Heading() {
  return (
    <h1 className="stal" contentEditable>
      Hello Sir sss ,<span style={ztile}>{greeting}</span>
    </h1>
  );
}

export default Heading;
