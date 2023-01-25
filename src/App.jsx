import React from "react";
import "./index.css";

function App(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.pic} className="cardImg" />
          <div className="cardInfo">
            <span className="cardCategory"> {props.cat}</span>
            <h3 className="cardTitle">{props.tit}</h3>
            <a href={props.link} target="_blank">
              <button>Click To Watch</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
