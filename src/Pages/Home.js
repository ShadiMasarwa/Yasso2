import React, { useContext } from "react";
import Layout from "../Components/Layout";
import Carousel from "react-grid-carousel";
import GlobalContext from "../Hooks/GlobalContext";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { randomProducts } = useContext(GlobalContext);
  return (
    <div>
      <Layout>
        <div className="container mt-5" style={{ minHeight: "72vh" }}>
          <Carousel
            cols={5}
            rows={1}
            gap={2}
            showDots
            loop
            autoplay={3000}
            responsiveLayout={[
              { breakpoint: 1200, cols: 4 },
              { breakpoint: 992, cols: 3 },
              { breakpoint: 768, cols: 2 },
              { breakpoint: 576, cols: 1 },
            ]}
          >
            {randomProducts.map((product, index) => (
              <Carousel.Item key={index}>
                <NavLink
                  to={{
                    pathname: `/product/${product.id}`,
                  }}
                >
                  <img
                    src={product.thumbnail}
                    key={index}
                    alt={product.title}
                    style={{ width: "200px", height: "200px" }}
                  />
                </NavLink>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
