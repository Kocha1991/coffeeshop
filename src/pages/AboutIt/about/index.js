import React from "react";
import PosterCoffe from "../../../assets/img/bg/posterCoffe.jpg";
import SectionText from "../../../components/sectionText";

import "./styles.css";

const About = ({ product }) => {
  return (
    <div className="about">
      <div className="imgPoster">
        <img src={PosterCoffe} alt="img" />
      </div>
      <div className="descrAboutIt">
        {!product ? (
          <SectionText title="About it" logoType="black">
            <p>About it</p>
            <p>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            Price: 16.99$
          </SectionText>
        ) : (
          <SectionText title="About it" logoType="black">
            <p>About it</p>
            <p>Description: {product.description}</p>
            Price: {product.price + product.currency}
          </SectionText>
        )}
      </div>
    </div>
  );
};

export default About;
