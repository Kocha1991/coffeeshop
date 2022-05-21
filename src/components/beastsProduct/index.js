import React from "react";
import SectionText from "../sectionText";
import Content from "../content";
import SolimoCoffe from '../../assets/img/product/solimo coffee.png'
import PrestoCoffe from '../../assets/img/product/prestocoffe.png'
import AromisticoCoffe from "../../assets/img/product/aromistico coffe.png"

import "./styles.css";

const BeastProduct = () => {
  return (
    <div className="ourBest">
      <SectionText title="Our best" logoType=""/>
      <div className="bestProduct">
        <Content img={SolimoCoffe} contentText="Solimo Coffee Beans 2 kg" contentPrice="10.73$"/>
        <Content img={PrestoCoffe} contentText="Presto Coffee Beans 1 kg" contentPrice="15.99$"/>
        <Content img={AromisticoCoffe} contentText="AROMISTICO Coffee 1 kg" contentPrice="6.99$"/>
      </div>
    </div>
  );
};

export default BeastProduct;
