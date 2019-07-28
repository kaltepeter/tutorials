import React from "react";
import { render } from "react-dom";

const Hi = () => {
  return <p>Hi.</p>;
};

render(<Hi />, document.getElementById("app"));
