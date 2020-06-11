import React from "react";
import ReactDOM from "react-dom";

const fName = "Eric";
const lName = "Moore";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Good Evening {fName + " " + lName} !</h1>
    <p>Where do you live {845}</p>
  </div>,

  document.getElementById("root")
);
