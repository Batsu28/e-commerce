import { useNavigate } from "react-router-dom";
import "../../styles/card.css";

export default function Card(prop) {
  const { product } = prop;
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
    >
      <div className="card_img">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>price: {product.price}$</p>
    </div>
  );
}
