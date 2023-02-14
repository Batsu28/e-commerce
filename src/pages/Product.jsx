import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Components/sub-components/Card";
import "../styles/product.css";
export default function Product() {
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const urlId = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/product/${urlId.id}`)
      .then((res) => setProduct(res.data));
  }, []);

  let style =
    product && product.stock !== 0 ? (
      <div style={{ color: "green" }}>
        <b>Availability: </b>
        {product && product.stock === 0 ? "No stock" : "In stock"}
      </div>
    ) : (
      <div style={{ color: "red" }}>
        <b>Availability: </b>
        {product && product.stock === 0 ? "No stock" : "In stock"}
      </div>
    );

  function increase() {
    if (product.stock > quantity) {
      setQuantity(quantity + 1);
    }
  }

  function decreace() {
    if (1 < quantity) {
      setQuantity(quantity - 1);
    }
  }

  function salePrice() {
    let price = product.price - product.price * (product.sale / 100);
    return price;
  }
  function AddtoCart() {
    localStorage.getItem("currentUser") === "user"
      ? setCartX(cartX + quantity)
      : setCartX(0);
    setQuantity(1);
  }

  return (
    <div className="container">
      <div className="product">
        <button onClick={() => navigate(-1)} className="back_btn">
          Back
        </button>
        <div className="full_product">
          <div className="product_image">
            <div className="full_image">
              <img
                src={product && product.image}
                alt={product && product.name}
              />
            </div>
            {/* <div className="more_image">
              <div className="small_image">
                <img src={product[0].image} alt={product[0].name} />
              </div>
              <div className="small_image">
                <img src={product[0].image} alt={product[0].name} />
              </div>
            </div> */}
          </div>
          <div className="product_info">
            <div className="product_sect">
              <h2>{product && product.name}</h2>
              <div className="product_price">
                {product && product.sale > 0 ? (
                  <p>
                    price: <s>{product && product.price}$</s>
                    <b>{salePrice()}$</b>
                  </p>
                ) : (
                  <p>
                    price: <b>{product && product.price}$</b>
                  </p>
                )}
              </div>
              {style}
              <span>Only {product && product.stock} left in stock</span>
            </div>
            <div className="product_sect">
              <div className="quantity">
                <b>Quantity :</b>
                <button onClick={decreace}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={increase}>+</button>
              </div>
              <div className="buy_btn">
                <button onClick={AddtoCart}>Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="product_sect">
              <b>Spec:</b>
              {product &&
                Object.entries(product.spec).map(([one, two], index) => (
                  <div key={index}>
                    {Object.keys(two)}: {Object.values(two)}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="same_category">
          <p>
            <b>Related product:</b>
          </p>
          {/* <div className="similiarItems">
            {data
              .filter(
                (item) =>
                  item.category === product.category && item.id !== product.id
              )
              .slice(0, 4)
              .map((item, index) => (
                <Card
                  product={item}
                  key={index}
                  setCartX={setCartX}
                  cartX={cartX}
                />
              ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
