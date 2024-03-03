import React, { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Layout from "../Components/Layout";
import Product from "../Components/Product";

const Favorites = () => {
  const { itemsInFav, products } = useContext(GlobalContext);
  return (
    <div>
      <Layout>
        <div class="container mt-5" style={{ minHeight: "70vh" }}>
          <div class="row">
            {itemsInFav.map((id) => {
              const currProduct = products.filter(
                (product) => product.id === id
              )[0];
              return <Product product={currProduct} />;
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Favorites;
