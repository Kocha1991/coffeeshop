import React from "react";
import Logotype from "../header/logotype";

import "./index.css";

const SectionText = (props) => {
  return (
    <div>
      <h2 className="sectionTitle">{props.title}</h2>
      <div className="sectionLogo">
        <Logotype type={props.logoType} />
      </div>
      {props.children}
    </div>
  );
};

export default SectionText;
