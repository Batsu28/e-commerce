import "../../styles/pageButton.css";

export default function PageButton(prop) {
  const { className, name } = prop;
  return (
    <button className={`${className && className} inactive_btn`}>{name}</button>
  );
}
