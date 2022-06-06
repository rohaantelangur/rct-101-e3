import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products"
import {
  Routes,
  Route,
} from "react-router-dom";
import Product from "./components/Products/Product/Product";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { auth, setauth } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/product/:id" element={<Product />} /> */}
        <Route path="/login" element={<Login />} />

      </Routes>   
    </div>
  );
}

export default App;
