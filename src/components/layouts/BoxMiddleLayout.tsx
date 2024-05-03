import React, { ReactNode } from "react";
import "../.././App.css";

type Props = {};

const BoxMiddleLayout = (props: Props) => {
  return (
    <div className="App">
      <div className="App-header">Header</div>
      <div className="App-content">Content</div>
    </div>
  );
};

export default BoxMiddleLayout;
