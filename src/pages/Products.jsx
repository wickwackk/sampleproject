import { products } from "../data/products.js";
import Table from "react-bootstrap/Table";
import Product from "../components/Product.jsx";
import "../style/products.css";

export default function Products() {
  return (
    <div className="table">
      <Table>
        <thead className="thead align-middle">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Sale</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className="tbody align-middle">
          {products.map((prod, index) => {
            if (index < 8) return <Product key={index} prod={prod} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}
