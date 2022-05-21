import React from "react";
import CustomHeader from "../../components/header";
import HeaderNav from "../../components/header/headerNav";
import MainTitle from "../../components/header/mainTitle";
import ImgGoods from "../../assets/img/bg/coffee-839233_1920.png";
import SectionText from "../../components/sectionText";
import Footer from "../../components/footer";

import "./styles.css";
import ProductsAll from "../../components/contentProducts";
import { initialProducts } from "../../helpers";

const OtherProducts = () => {
  return (
    <div className="main">
      <CustomHeader type="pleasureHeader">
        <HeaderNav />
        <div className="mainHeader">
          <MainTitle>For your pleasure</MainTitle>
        </div>
      </CustomHeader>
      <div className="aboutOurGoods">
        <div className="imgGoods">
          <img src={ImgGoods} alt="img" />
        </div>
        <SectionText title="About our goods" logoType="black">
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible.
          <p /> Afraid at highly months do things on at. Situation recommend
          objection do intention so questions. As greatly removed calling
          pleased improve an. Last ask him cold feel met spot shy want. Children
          me laughing we prospect answered followed. At it went is song that
          held help face.
        </SectionText>
      </div>
      <hr />
      <ProductsAll products={initialProducts} />
      <Footer />
    </div>
  );
};

export default OtherProducts;
