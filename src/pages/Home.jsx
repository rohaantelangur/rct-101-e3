import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Product from "../components/Products/Product/Product";
import Products from "../components/Products/Products";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";

const Home = () => {
  const { auth, setauth } = useContext(AuthContext);
  
  return (<>
    {auth ? <Navigate to="/products" replace={true} /> : <Navigate to="/login" replace={true} />}
  Home</>

  )
};

export default Home;
