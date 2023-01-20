import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import "../styles/home.css";
import { data, category } from "../../util/data";

export default function Home() {
  const navigate = useNavigate();
  const [showProduct, setShowProduct] = useState(data);

  function filterName(value) {
    if (value.toLowerCase() === "popular") {
      setShowProduct(data);
    } else {
      let filteredData = data.filter(
        (product) => product.category === value.toLowerCase()
      );
      setShowProduct(filteredData);
    }

    console.log(value.toLowerCase());
  }

  return (
    <main>
      <div className="container">
        <div className="home">
          <div className="home_top">
            <div className="home_shopNow">
              <h2>
                <b>Canon</b> camera
              </h2>
              <div>
                <button
                  onClick={() => navigate("/products")}
                  className="shop_now"
                >
                  Shop Now
                </button>
                <button className="veiw_more">Veiw more</button>
              </div>
            </div>
            <div className="home_img">
              <img src="./image/camera.png" alt="camera" />
            </div>
          </div>
          <div className="home_product">
            <div className="home_nav">
              <p>Popular products</p>
              <Navbar MENUS={category[0]} filterName={filterName} />
            </div>
            <div className="popular_products">
              {showProduct.slice(0, 8).map((product, index) => (
                <Card product={product} key={index} />
              ))}
            </div>
            <button
              className="home_seeAll"
              onClick={() => navigate("/products")}
            >
              See All
            </button>
          </div>
          <div className="home_ad">
            <img src="./image/home_ad.png" alt="ad" />
          </div>
          <div className="home_news">
            <div className="news_left"></div>
            <div className="news_right">
              <div className="news_top"></div>
              <div className="news_bot"></div>
            </div>
          </div>
          <div className="home_brand">
            <div className="brand_img">
              <img src="./image/brand-4.png" alt="brand" />
            </div>
            <div className="brand_img">
              <img src="./image/brand-5.png" alt="brand" />
            </div>
            <div className="brand_img">
              <img src="./image/brand-6.png" alt="brand" />
            </div>
            <div className="brand_img">
              <img src="./image/brand-7.png" alt="brand" />
            </div>
            <div className="brand_img">
              <img src="./image/brand-8.png" alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
