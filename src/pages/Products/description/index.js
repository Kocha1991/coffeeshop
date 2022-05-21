import React from "react";
import SectionText from "../../../components/sectionText";
import Girl from "../../../assets/img/bg/girlCoffe.jpg";
import Filter from "../filter";

import "./styles.css";

const DescriptionProducts = ({
  countries,
  handleProductFilter,
  searchedValue,
  handleProductSearch,
}) => {
  return (
    <div className="containerProducts">
      <div className="aboutOur">
        <img src={Girl} alt="img" />
        <SectionText title="About our beans" logoType="black">
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
      <Filter
        countries={countries}
        handleProductFilter={handleProductFilter}
        searchedValue={searchedValue}
        handleProductSearch={handleProductSearch}
      />
    </div>
  );
};

export default DescriptionProducts;
