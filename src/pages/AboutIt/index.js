import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import CustomHeader from "../../components/header";
import HeaderNav from "../../components/header/headerNav";
import MainTitle from "../../components/header/mainTitle";
import { initialProducts } from "../../helpers";
import About from "./about";

import "./styles.css";

const AboutIt = () => {
  const { id } = useParams();

  const currentProduct = initialProducts.find((p) => p.id === Number(id));

  return (
    <div className="main">
      <CustomHeader type="about">
        <HeaderNav />
        <div className="mainHeader">
          <MainTitle>Our Coffee</MainTitle>
        </div>
      </CustomHeader>
      <About product={currentProduct} />
      <Footer />
    </div>
  );
};

export default AboutIt;
