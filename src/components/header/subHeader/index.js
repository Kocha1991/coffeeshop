import React from "react";

import "./styles.css";

const SubHeader = (props) => {
  return (
    <div className="subHeader">
      {props.children}
    </div>
  );
};

export default SubHeader;
