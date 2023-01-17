import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/sub-components/Card";
import Navbar from "../Components/sub-components/Navbar";
import "../styles/home.css";
import { data, category } from "../util/data";

export default function Home() {
  const navigate = useNavigate();
  const [showProduct, setShowProduct] = useState(data);

  return (
    <main>
      <div className="container">
        <div className="home">
          <div className="home_nav">
            <p>Popular products</p>
            <Navbar MENUS={category} setShowProduct={setShowProduct} />
          </div>
          <div className="popular_products">
            {showProduct.slice(0, 8).map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </div>
          <button className="home_seeAll" onClick={() => navigate("/products")}>
            See All
          </button>
        </div>
      </div>
    </main>
  );
}
