import React, { useState } from "react";
import "./index.css";
import myAudio from "./images/final.mp3";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    eMail: "",
    pNumber: "",
  });

  const onSubmit = (event) => {
    const audio = new Audio(myAudio);
    audio.play();
    event.preventDefault();
  };

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return { fName: value, lName: preValue.lName };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          eMail: preValue.eMail,
          pNumber: preValue.pNumber,
        };
      } else if (name === "eMail") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          eMail: value,
          pNumber: preValue.pNumber,
        };
      } else if (name === "pNumber") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          eMail: preValue.eMail,
          pNumber: value,
        };
      }
    });
  };

  return (
    <div class="container">
      <div class="form-container">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName.fName} {fullName.lName}
            </h1>
            <p class="info">Tusana Email: {fullName.eMail}</p>
            <p class="info">Tusana Number: {fullName.pNumber}</p>
            <input
              placeholder="Enter Your First Name"
              name="fName"
              onChange={inputEvent}
              value={fullName.fName}
            />
            <br />
            <input
              placeholder="Enter Your Last Name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lName}
            />
            <br />
            <input
              placeholder="Enter Your Email"
              name="eMail"
              onChange={inputEvent}
              value={fullName.eMail}
            />
            <br />
            <input
              placeholder="Enter Your Phone Number"
              name="pNumber"
              onChange={inputEvent}
              value={fullName.pNumber}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
