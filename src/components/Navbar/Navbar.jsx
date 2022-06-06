import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import Products from "../Products/Products";

// use react-router Link or NavLink


const Navbar = () => {
  const { CartItem, setCartItem } = useContext(CartContext);
  const { auth, setauth } = useContext(AuthContext);


  const handleOnClick=()=>{
  setauth(!auth)    
  }
  return (
    <div data-cy="navbar" >
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      {/* <Link to="/products" >Product</Link> */}
      <span data-cy="navbar-cart-items-count">Cart: {CartItem.length-1}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleOnClick}>{auth?'LOGOUT':'LOGIN'}</button>
      {/* {auth? <Navigate to="/"/> : <Navigate to="/products"/>}  */}
    </div>
  );
};

export default Navbar;
