import React, { useState } from "react";
import "./index.css";

const App = () => {
  const black = "#000000";
  const [bg, setbg] = useState(black);
  const [btn, setbtn] = useState("Dont Touch Me");

  const normal = () => {
    setbtn("Baaz aja 🙃");
  };

  const colour = () => {
    let newbg = "#000000";
    setbg(newbg);
    setbtn("Dont Double Click 😠😠😠 ");
  };
  return (
    <>
      <div className="container" style={{ background: bg }}>
        <button onClick={colour} onDoubleClick={normal}>
          {btn}
        </button>
      </div>
    </>
  );
};

export default App;
