import React, { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { NavLink } from "react-router-dom";

const Product = ({ product }) => {
  const { itemsInCart, setItemsInCart, itemsInFav, setItemsInFav } =
    useContext(GlobalContext);

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 text-center">
      <div className="card mb-5" style={{ width: 300 }}>
        <NavLink
          to={{
            pathname: `/product/${product.id}`,
          }}
        >
          <img
            src={product.images[0]}
            className="card-img-top"
            style={{ height: 250 }}
            alt={product.title}
          />
        </NavLink>

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h5 className="card-text">Price: {product.price.toFixed(2)} ILS</h5>
          <h5 className="card-text">
            Discount:{" "}
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </h5>
          <p></p>
          <button
            className="btn btn-success"
            onClick={() => setItemsInCart([...itemsInCart, product.id])}
          >
            🛒
          </button>
          <button
            className="btn btn-info"
            onClick={() => setItemsInFav([...itemsInFav, product.id])}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
