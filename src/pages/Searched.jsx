import { useParams } from "react-router-dom";
import Card from "../Components/sub-components/Card";
import { data } from "../util/data";

export default function Searched() {
  const test = useParams();
  let products = data.filter((product) =>
    product.name.toLowerCase().includes(test.test.toLowerCase())
  );

  console.log("2", products);
  return (
    <div>
      {products.map((product, index) => (
        <Card product={product} />
      ))}
    </div>
  );
}
