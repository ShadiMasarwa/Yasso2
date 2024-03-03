import React, { useContext } from "react";
import Layout from "../Components/Layout";
import { useParams } from "react-router-dom";
import GlobalContext from "../Hooks/GlobalContext";

const Product = () => {
  const { id } = useParams();
  const { products, setItemsInCart, setItemsInFav, itemsInCart, itemsInFav } =
    useContext(GlobalContext);

  const currProduct = products.filter((el) => el.id === parseInt(id, 10))[0];

  return (
    <div>
      <Layout>
        <div
          className="container d-flex justify-content-center pt-5"
          style={{ minHeight: "70vh" }}
        >
          <div className="row">
            <div className="d-flex flex-row  gap-5 col-lg-6 col-md-12 mb-md-5">
              <img
                src={currProduct.images[0]}
                alt={currProduct.title}
                style={{
                  width: "510px",
                  height: "300px",
                  border: "3px gray solid",
                  borderRadius: "10px",
                }}
              />

              <div className="col-lg-6 col-md-12">
                <h3>{currProduct.title}</h3>
                <p>Category: {currProduct.category}</p>
                <p>Brand: {currProduct.brand}</p>
                <h5>{currProduct.description}</h5>
                <p className="mt-5">In Stock: {currProduct.stock}</p>
                <p>Rating: {currProduct.rating}</p>
                <h6 className="mt-5">
                  Price:{" "}
                  <span
                    style={{ textDecoration: "line-through", color: "red" }}
                  >
                    {" "}
                    {currProduct.price.toFixed(2)} ILS
                  </span>
                </h6>
                <h4 className="">
                  Sale:{" "}
                  <span style={{ color: "green" }}>
                    {(
                      currProduct.price -
                      (currProduct.discountPercentage * currProduct.price) / 100
                    ).toFixed(2)}{" "}
                    ILS
                  </span>
                </h4>
                <button
                  onClick={() =>
                    setItemsInCart([...itemsInCart, currProduct.id])
                  }
                  className="btn btn-success mt-5"
                  style={{ width: "35%" }}
                >
                  🛒
                </button>{" "}
                <button
                  onClick={() => setItemsInFav([...itemsInFav, currProduct.id])}
                  className="btn btn-primary w-35 mt-5"
                  style={{ width: "35%" }}
                >
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Product;
