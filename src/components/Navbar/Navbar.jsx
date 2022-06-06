import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Products from "../Products/Products";

// use react-router Link or NavLink


const Navbar = () => {
  const { CartItem, setCartItem } = useContext(CartContext);

  const handleOnClick=()=>{
    
  }
  return (
    <div data-cy="navbar" >
      <Link data-cy="navbar-home-link" to="/">Home</Link>
      <Link to="/products" >Product</Link>
      <span data-cy="navbar-cart-items-count">Cart: {CartItem.length}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleOnClick}>Login/logout</button>
    </div>
  );
};

export default Navbar;
