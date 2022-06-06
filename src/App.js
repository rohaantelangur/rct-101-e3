import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products"
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Product from "./components/Products/Product/Product";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  const { auth, setauth } = useContext(AuthContext);
   
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<RequiredAuth> <Products /> </RequiredAuth>} />
        <Route path="/login" element={<Login />} />

      </Routes>   
    </div>
  );
}

export default App;
