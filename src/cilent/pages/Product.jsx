import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../Components/sub-components/Card";
import "../styles/product.css";
import { data } from "../../util/data";

export default function Product(prop) {
  const navigate = useNavigate();
  const urlId = useParams();
  const { setCartX } = prop;
  const { cartX } = prop;
  const [quantity, setQuantity] = useState(1);

  let product = data.filter((product) => product.id === urlId.id);
  let style =
    product[0].stock !== 0 ? (
      <div style={{ color: "green" }}>
        <b>Availability: </b>
        {product[0].stock === 0 ? "No stock" : "In stock"}
      </div>
    ) : (
      <div style={{ color: "red" }}>
        <b>Availability: </b>
        {product[0].stock === 0 ? "No stock" : "In stock"}
      </div>
    );
  function increase() {
    if (product[0].stock > quantity) {
      setQuantity(quantity + 1);
    }
  }
  function decreace() {
    if (1 < quantity) {
      setQuantity(quantity - 1);
    }
  }
  function salePrice() {
    let price = product[0].price - product[0].price * (product[0].sale / 100);
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
              <img src={product[0].image} alt={product[0].name} />
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
              <h2>{product[0].name}</h2>
              <div className="product_price">
                {product[0].sale > 0 ? (
                  <p>
                    price: <s>{product[0].price}$</s>
                    <b>{salePrice()}$</b>
                  </p>
                ) : (
                  <p>
                    price: <b>{product[0].price}$</b>
                  </p>
                )}
              </div>
              {style}
              <span>Only {product[0].stock} left in stock</span>
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
              {Object.entries(product[0].spec).map(([one, two], index) => (
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
          <div className="similiarItems">
            {data
              .filter(
                (item) =>
                  item.category === product[0].category &&
                  item.id !== product[0].id
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
          </div>
        </div>
      </div>
    </div>
  );
}
