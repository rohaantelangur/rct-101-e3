import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { auth, setauth } = useContext(AuthContext);


  return (
    <div> Login
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={()=>{
        setauth(true);
      }}>Login</button>
      {auth? <Navigate to="/"/> : ""} 
    </div>
  );
};

export default Login;
