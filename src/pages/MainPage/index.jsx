import React from "react";
import CustomHeader from "../../components/header";
import HeaderNav from "../../components/header/headerNav";
import BeastProduct from "../../components/beastsProduct";
import SectionText from "../../components/sectionText";
import Footer from "../../components/footer";
import Logotype from '../../components/header/logotype';
import MainTitle from "../../components/header/mainTitle";
import SubHeader from "../../components/header/subHeader";

import "./styles.css";

const MainPage = () => {
  return (
    <div className="main">
      <CustomHeader type="default">
        <HeaderNav className='positionHeader'/>
        <div className="main-header">
          <MainTitle>Everything You Love About Coffee</MainTitle>
          <Logotype />
          <SubHeader>
            <h2>
              <p>We makes every day full of energy and taste</p>
              <p>Want to try our beans?</p>
            </h2>
          </SubHeader>
          <button className="btnMain">More</button>
        </div>
      </CustomHeader>
      <div className="text">
        <SectionText title="About us" logoType="black">
          <div className="mainInfo">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do inten"tion so questions. As greatly
            removed calling pleased improve an.
            <p></p>
            <p>
              Last ask him cold feel met spot shy want. Children me laughing we
              prospect answered followed. At it went is song that held help
              face. Now residence dashwoods she excellent you. Shade being under
              his bed her, Much read on as draw. Blessing for ignorant exercise
              any yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day
            </p>
            ladies now.
          </div>
        </SectionText>
      </div>
      <BeastProduct />
      <Footer/>
    </div>
  );
};

export default MainPage;
