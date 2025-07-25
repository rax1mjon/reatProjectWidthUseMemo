import React, { memo } from "react";

import PropTypes from "prop-types";

import "./Table.scss";
const TableCustom = ({ products, deleteFunc }) => {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.length ? (
          products.map((el, i) => {
            const { name, price, category, quantity, description, id } = el;
            return (
              <tr key={id}>
                <td>{++i}</td>
                <td>{name}</td>
                <td>${price}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>
                  <div className="btns">
                    <button
                      className="delete-btn"
                      onClick={() => deleteFunc(id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={7} style={{ textAlign: "center" }}>
              No Product
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

TableCustom.PropTypes = {
  products: PropTypes.array,
  deleteFunc: PropTypes.func,
};

const Table = memo(TableCustom);

export default Table;
