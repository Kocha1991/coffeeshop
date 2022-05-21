import React from "react";

import "./styles.css";

const CustomHeader = (props) => {
  return (
    <div >
      <header
        className={
          props.type === "default"
            ? "header defaultHeader"
            : props.type === "about"
            ? "aboutHeader header"
            : "pleasureHeader header"
        }
      >
        {props.children}
        
      </header>
    </div>
  );
};

export default CustomHeader;
