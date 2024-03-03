import { useEffect, useState } from "react";
import GlobalContext from "./Hooks/GlobalContext";
import Products from "./Pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import Product from "./Pages/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [numOfProducts, setNumOfProducts] = useState(20);

  const [randomProducts, setRandomProducts] = useState([]);

  //פועל כאשר יש שינוי במערך של המוצרים שמשכתי מתוך אתר ג'יסון
  useEffect(() => {
    if (products.length > 0) {
      setRandomProducts(GetRandomProducts); //קורא לפונקציה GetRandomProducts ושולף משם את המוצרים הרנדומליים
    }
  }, [products]);
  // פונקציה שלא מקבלת כלום אך מחשבת ומחזירה מערך של 20 מוצרים רנדומליים
  const GetRandomProducts = () => {
    const tempProducts = [];
    for (let i = 1; i <= 20; i++) {
      tempProducts.push(
        products[parseInt(Math.random(products.length) * products.length)]
      );
    }
    return tempProducts;
  };

  const IncreaseNumOfProducts = () => setNumOfProducts(numOfProducts + 20);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=1000")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  //Local Storage
  //const [itemsInCart, setItemsInCart] = useState(Load item in cart from local storage)

  //Get items from local storage if exist, otherwise set the state to empty array
  const [itemsInCart, setItemsInCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [itemsInFav, setItemsInFav] = useState(
    JSON.parse(localStorage.getItem("favItems"))
      ? JSON.parse(localStorage.getItem("favItems"))
      : []
  );

  //Set the local storage to what ever items are in cart or fav
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(itemsInFav));
  }, [itemsInFav]);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          products,
          itemsInCart,
          setItemsInCart,
          itemsInFav,
          setItemsInFav,
          IncreaseNumOfProducts,
          numOfProducts,
          randomProducts,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fav" element={<Favorites />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
