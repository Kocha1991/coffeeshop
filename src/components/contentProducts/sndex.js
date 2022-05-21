import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const ContentProducts = ({
  img,
  contentText,
  contentCountry,
  contentPrice,
  contentCurrency,
  id,
}) => {
  const navigate = useNavigate();

  console.log(id);

  return (
    <button
      className="contentProducts"
      onClick={() => navigate(`/aboutIt/${id}`)}
    >
      <img src={img} alt="img" className="imgBestProduct" />
      <h3 className="contentText">{contentText}</h3>
      <h3 className="contentCountry">{contentCountry}</h3>
      <h3 className="contentPrice">
        {contentPrice}
        {contentCurrency}
      </h3>
    </button>
  );
};

export default ContentProducts;
