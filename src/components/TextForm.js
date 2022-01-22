import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase Button Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to UpperCase!", "success");
  };

  const handleLowClick = () => {
    console.log("Lowercase Button Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase!", "success");
  };

  const handleOnChange = (e) => {
    console.log("Text Changed");
    setText(e.target.value);
  };

  const removeText = (e) => {
    setText("");
  };

  const handleCopy = () => {
    //Copy Text to Clipboard
    // navigator.clipboard.writeText(text);
    let newText = document.getElementById("myBox").value;
    navigator.clipboard.writeText(newText);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#15202b" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary" onClick={removeText}>
          Remove text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="my-1">Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} Words AND {text.length} Characters
        </p>
        <p>
          {0.008 * (text.split(" ").length - 1)} Minutes to read the following
          Text
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Some Text htmlFor preview"}</p>
      </div>
    </>
  );
}
