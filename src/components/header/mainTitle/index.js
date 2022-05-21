import React from "react";

import "./styles.css";

const MainTitle = (props) => {
  return (
    <div className="title">
      <h1>{props.children}</h1>
    </div>
  );
};

export default MainTitle;
