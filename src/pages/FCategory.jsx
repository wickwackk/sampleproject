import { useState } from "react";
import { Table } from "react-bootstrap";
import Product from "../components/Product";
import { categories } from "../data/categories";
import { products } from "../data/products";
import "../style/fcate.css";

export default function FCategory() {
  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState(false);

  function filterHandler(cate) {
    setFiltered(products.filter((product) => product.category === cate.name));
    setShow(true);
  }

  function backHandler() {
    setShow(false);
  }

  return (
    <div>
      {categories.map((category, index) => {
        return show ? null : (
          <button
            className="filterBtn"
            key={index}
            onClick={() => filterHandler(category)}
          >
            {category.name}
            <img src={category.img} alt="" />
          </button>
        );
      })}
      {show && (
        <>
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
              {filtered.map((prod, index) => {
                return <Product key={index} prod={prod} />;
              })}
            </tbody>
          </Table>
          <button onClick={() => backHandler()}>back</button>
        </>
      )}
    </div>
  );
}
