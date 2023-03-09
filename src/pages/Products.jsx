import { data } from "../data/products.js";
import Table from "react-bootstrap/Table";
import Product from "../components/Product.jsx";
import "../style/products.css";

export default function Products() {
  return (
    <div className="table">
      <Table striped bordered>
        <thead>
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
        <tbody>
          {data.map((prod, index) => {
            return <Product key={index} prod={prod} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}
