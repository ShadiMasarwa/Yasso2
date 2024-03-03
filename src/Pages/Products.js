import React, { useContext } from "react";
import Product from "../Components/Product";
import GlobalContext from "../Hooks/GlobalContext";
import Layout from "../Components/Layout";

const Products = () => {
  const { products, numOfProducts, IncreaseNumOfProducts } =
    useContext(GlobalContext);
  return (
    <div>
      <Layout>
        <div class="container mt-5">
          <div class="row">
            {products.map((el, index) =>
              index + 1 <= numOfProducts ? <Product product={el} /> : ""
            )}
          </div>
          <div className="d-flex justify-content-center">
            {numOfProducts < products.length ? (
              <button
                className="btn btn-success"
                onClick={IncreaseNumOfProducts}
              >
                More Products
              </button>
            ) : (
              "End of Products"
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Products;
