import React, { useState } from "react";
import CustomHeader from "../../components/header";
import HeaderNav from "../../components/header/headerNav";
import MainTitle from "../../components/header/mainTitle";
import Footer from "../../components/footer";
import DescriptionProducts from "./description";

import "./styles.css";
import ProductsAll from "../../components/contentProducts";
import { initialProducts } from "../../helpers";

const Products = () => {
  //const [назва змінної , функція яка може міняти цю змінну і реакт побачить і відобразить ці зміни]
 
  const countries = [
    "All",
    ...new Set(initialProducts.map((p) => p.originCountry)),
  ];
  const [products, setProducts] = useState(initialProducts);

  const [searchedValue, setSearchedValue] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  // [a,b,c] -> filter((i) => i !== a)

  const handleProductFilter = (country) =>
    setProducts(() => {
      if (country === "All") {
        return initialProducts;
      } else {
        return initialProducts.filter((p) => p.originCountry === country);
      }
    });

  const handleProductSearch = ({ target }) => {
    const { value } = target;
    setSearchedValue(value);
    if (value) {
      setIsSearching(true);
      setProducts(
        initialProducts.filter((p) =>
          p.description.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        )
      );
    } else {
      setIsSearching(false);
      setProducts(initialProducts);
    }
  };

  return (
    <div className="main">
      <CustomHeader type="about">
        <HeaderNav />
        <div className="mainHeader">
          <MainTitle>Our Coffee</MainTitle>
        </div>
      </CustomHeader>
      <DescriptionProducts
        countries={countries}
        handleProductFilter={handleProductFilter}
        searchedValue={searchedValue}
        handleProductSearch={handleProductSearch}
      />
      <ProductsAll products={products} isSearching={isSearching} />
      <Footer />
    </div>
  );
};

export default Products;
