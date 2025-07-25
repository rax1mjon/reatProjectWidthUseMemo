import React, { useCallback, useEffect, useState } from "react";
import AddForm from "../../assets/AddForm/AddForm";
import Table from "../../assets/Table/Table";
import Search from "../../assets/Search/Search";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import "./HomePage.scss";
const HomePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    quantity: 0,
    description: "",
  });

  const defaultProducts = [
    {
      id: 1,
      name: "iPhone 14",
      price: 12000000,
      category: "Electronics",
      quantity: 10,
      description: "Apple kompaniyasining yangi flagman telefoni",
    },
    {
      id: 2,
      name: "Nike Air Max",
      price: 700000,
      category: "Clothing",
      quantity: 25,
      description: "Sportga mos, yengil va qulay oyoq kiyim",
    },
    {
      id: 3,
      name: "React Kitobi",
      price: 90000,
      category: "Books",
      quantity: 100,
      description:
        "Boshlang'ich React o'rganuvchilar uchun oson tushunarli kitob",
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", JSON.stringify(defaultProducts));
      setProducts(defaultProducts);
    }
  }, []);

  const localProducts =
    JSON.parse(localStorage.getItem("products")) || defaultProducts;

  const [products, setProducts] = useState(localProducts);

  const category = ["Electronics", "Clothing", "Books", "Food"];

  const handelAddFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (
        product.name.trim() &&
        product.price > 0 &&
        product.category &&
        product.quantity > 0
      ) {
        const newProduct = { id: uuid(), ...product };

        const updatedProducts = [...products, newProduct];

        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);

        setProduct({
          name: "",
          price: 0,
          category: "",
          quantity: 0,
          description: "",
        });
      } else {
        toast("The information is not complete!!");
      }
    },
    [product, products]
  );

  const deleteFunc = useCallback(
    (id) => {
      const isDelete = confirm("Do you want to delate ?");

      if (isDelete) {
        const updatedProducts = products.filter((el) => el.id != id);

        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
      }
    },
    [products]
  );

  const SearchSortFilter = useCallback(
    (e, name) => {
      let updatedProducts;
      const { value } = e.target;

      if (name == "search" && value != "") {
        updatedProducts = products.filter((el) =>
          el.name.trim().toLowerCase().includes(value.trim().toLowerCase())
        );
      } else if (value == "") {
        updatedProducts = JSON.parse(localStorage.getItem("products"));
      }

      if (name == "sort") {
        updatedProducts =
          value === "low"
            ? [...products].sort((a, b) => a.price - b.price)
            : [...products].sort((a, b) => b.price - a.price);
      }

      if (name == "filter" && value != "all") {
        updatedProducts = products.filter((el) => el.category === value);
      } else if (value == "all") {
        updatedProducts = JSON.parse(localStorage.getItem("products"));
      }

      console.log(updatedProducts);
      setProducts(updatedProducts);
    },
    [products]
  );

  return (
    <>
      <section className="hero">
        <div className="container hero--wrapper">
          <AddForm
            category={category}
            product={product}
            setProduct={setProduct}
            handelSubmit={handelAddFormSubmit}
          />
          <div className="hero--main">
            <Search SearchSortFilter={SearchSortFilter} />
            <Table products={products} deleteFunc={deleteFunc} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
