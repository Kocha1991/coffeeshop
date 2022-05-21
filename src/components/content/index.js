import React from "react";

import './styles.css'

const Content = (props) => {
  return (
    <button className="content">
      <img src={props.img} alt="img" className="imgBestProduct" />
      <h3 className="contentText">{props.contentText}</h3>
      <h3 className="contentPrice">{props.contentPrice}</h3>
    </button>
  );
};

export default Content;
