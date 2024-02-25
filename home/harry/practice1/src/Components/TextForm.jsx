import React, { useState } from "react";

function TextForm(props) {
  const handleOnchange = (event) => {
    // console.log("clicked on change");
    setText(event.target.value);
  };

  const handleUpclick = () => {
    // console.log("On change");
    let newText = text.toUpperCase();

    setText(newText);
  };
  const [text, setText] = useState("");
  // setText = 'new text'
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-conrol"
            value={text}
            id="myBox"
            cols="50"
            rows="8"
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
      </div>
    </>
  );
}
export default TextForm;
