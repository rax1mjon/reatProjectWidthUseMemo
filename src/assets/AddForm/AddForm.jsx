import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";

import "./AddForm.scss";
const AddFormCustom = ({ category, product, setProduct, handelSubmit }) => {
  const handleInput = useCallback(
    (e) => {
      setProduct({ ...product, [e.target.id]: e.target.value });
    },
    [product]
  );

  return (
    <>
      <form className="product-form" onSubmit={handelSubmit}>
        <h2>Add New Product</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInput}
            id="name"
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInput}
            id="price"
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            onChange={handleInput}
            id="category"
            value={product.category}
          >
            <option value="" disabled>
              Select category
            </option>
            {category.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </select>
        </label>

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            onChange={handleInput}
            value={product.quantity}
            id="quantity"
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            rows="3"
            onChange={handleInput}
            id="description"
            value={product.description}
          ></textarea>
        </label>

        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

AddFormCustom.PropTypes = {
  category: PropTypes.array,
  product: PropTypes.object,
  setProduct: PropTypes.func,
  handelSubmit: PropTypes.func,
};

const AddForm = memo(AddFormCustom);

export default AddForm;
