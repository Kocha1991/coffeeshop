import React from "react";
import ContentProducts from "./sndex";
import AromaCoffe from "../../assets/img/product/aromistico coffe.png";

const ProductsAll = ({ products, isSearching }) => {
  return (
    <div>
      <div className="containerDiscriptionProducts">
        {products && products.length ? (
          products.map((product) => (
            <ContentProducts
              key={product.id}
              id={product.id}
              img={AromaCoffe}
              contentText={product.description}
              contentCountry={product.originCountry}
              contentPrice={product.price}
              contentCurrency={product.currency}
            />
          ))
        ) : !isSearching ? (
          <h2>Sorry no products to display</h2>
        ) : (
          <h2>No products that required your search</h2>
        )}
      </div>
    </div>
  );
};

export default ProductsAll;
