import React, { useState } from "react";

export default function FaheemDancer(props) {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    let a = Text.toUpperCase();
    setText(a);
  };

  const handleLowClick = () => {
    let a = Text.toLowerCase();
    setText(a);
  };

  const handleOnChange = (event) => {
    console.log("change hoagaya bhai shaab");
    setText(event.target.value);
  };

  const handleClrClick = () => {
    let a = "";
    setText(a);
  };

  const HandleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
  };

  let minutes = Text.split(" ").length;

  return (
    <>
      <div className="conatainer">
        <h1>{props.head}</h1>
        <div className="mb-3">
          <textarea
            value={Text}
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>

        <button className="btn btn-dark mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleClrClick}>
          Clear Text
        </button>
        <button className="btn btn-dark mx-1" onClick={HandleSpeak}>
          Speak🔊
        </button>
      </div>
      <div className="container my-4">
        <h2>Text Summary</h2>
        <p>
          There are <b class="text-primary">{Text.split(" ").length}</b> words
          and <b class="text-primary">{Text.length} Characters </b>
        </p>
        <p>
          This pragraph will take{" "}
          <b class="text-primary">{minutes / 125} Minutes </b> to read
        </p>
        <h3 className="text-3xl font-bold underline">Preview</h3>
        <p>{Text}</p>
      </div>
    </>
  );
}
