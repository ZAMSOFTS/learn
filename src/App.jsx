import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [before, after] = useState();
  const [fullname, setfullname] = useState();
  const [head, sethead] = useState("Lets Find Your Age");
  const [iftar, setiftar] = useState();

  const inputEvent = (event) => {
    after(event.target.value);
  };

  const onSubmit = () => {
    setfullname(before);
    sethead("Your Are ");
    setiftar(" Years Old");
  };
  return (
    <>
      <div>
        <h1>
          {head} <span>{fullname}</span>
          {iftar}
        </h1>
        <input
          type="number"
          pattern="[0-9]*"
          max={12}
          placeholder="Enter Your Age"
          onChange={inputEvent}
          value={before}
        />
        <button onClick={onSubmit}>Find Age</button>
      </div>
    </>
  );
};

export default App;
