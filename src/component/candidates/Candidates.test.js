import React from "react";
import ReactDOM from "react-dom";
import Candidates from "./Candidates";

it("Header renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Candidates />, div);
  ReactDOM.unmountComponentAtNode(div);
});
