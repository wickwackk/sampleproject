import "../style/addproduct.css";
import { categories } from "../data/categories";

export default function AddProduct() {
  function submitHandler(e) {
    console.log("new category: ", e.target.newCategory.value);
  }

  return (
    <div className="addprod">
      <form>
        <h2>Add Product</h2>
        <input name="name" type="text" placeholder="name" />
        <input name="price" type="text" placeholder="price" />
        <input name="image" type="text" placeholder="image" />
        <input name="brand" type="text" placeholder="brand" />
        <select name="category" id="category">
          <option hidden value={""}>
            Choose category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Add +</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
        }}
      >
        <h2>Add Category</h2>
        <input name="newCategory" type="text" placeholder="category" />
        <button type="submit">Add category +</button>
      </form>
      <form>
        <h2>Add Brand</h2>
        <input name="newBrand" type="text" placeholder="brand" />
        <button type="submit">Add brand +</button>
      </form>
    </div>
  );
}
