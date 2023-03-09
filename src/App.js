import { useEffect, useState } from "react";
import "./App.css";
import AddProduct from "./pages/AddProduct";
import FBrand from "./pages/FBrand";
import FCategory from "./pages/FCategory";
import LoadMore from "./pages/LoadMore";
import Products from "./pages/Products";

let btnNames = [
  { name: "All products", value: "all", component: <Products /> },
  { name: "Load more", value: "load", component: <LoadMore /> },
  { name: "Filter by category", value: "fCate", component: <FCategory /> },
  { name: "Filter by brand", value: "fBrand", component: <FBrand /> },
  { name: "Add product", value: "add", component: <AddProduct /> },
];

function App() {
  const [current, setCurrent] = useState(btnNames[0]);

  useEffect(() => {
    if (localStorage.getItem("btnVal")) {
      setCurrent(
        btnNames.find((btn) => btn.value === localStorage.getItem("btnVal"))
      );
    }
  }, []);

  function currentStateHandler(btn) {
    setCurrent(btn);
    localStorage.setItem("btnVal", btn.value);
  }
  return (
    <div className="App">
      <div className="buttons">
        {btnNames.map((btn, index) => (
          <button
            key={index}
            onClick={() => currentStateHandler(btn)}
            className={
              current.value === btn.value ? "activeBtn" : "inactiveBtn"
            }
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div>{current.component}</div>
    </div>
  );
}

export default App;
