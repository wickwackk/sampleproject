import "../style/product.css";

export default function Product({ prod }) {
  return (
    <tr className="product">
      <td>
        <img src={prod.image} alt={prod.name} />
      </td>
      <td>{prod.name}</td>
      <td>{prod.price}$</td>
      <td>{prod.brand}</td>
      <td>{prod.category}</td>
      <td>{prod.sale}%</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}
