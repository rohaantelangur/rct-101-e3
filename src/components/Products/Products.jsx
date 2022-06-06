import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import Product from "./Product/Product"

const Products = () => {
  // const [products, setproducts] = useState([])
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/products`).then((r)=>setproducts(r.data))
  // }, [])

  // const { CartItem } = useContext(CartContext);


  return <div><h1>All Products</h1>
  <Product />
  </div>;
};

export default Products;
