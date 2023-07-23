import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleredClick = () => {
    document.getElementById("myBox").style.color = "red";
    props.showAlert("Changed the color of text to red", "success");
    // setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleonChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "Anshuman";    // Wrong way to change the state
  // setText("Anshuman");  // Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === `light` ? `black` : `white` }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            placeholder="Enter text here"
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === `light` ? `white` : `black`,
              color: props.mode === `light` ? `black` : `white`,
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleredClick}>
          Convert text to Red
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === `light` ? `black` : `white` }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : `Enter some text to see its preview`}</p>
      </div>
    </>
  );
}
