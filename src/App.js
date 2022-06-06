import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products"
import {
  Routes,
  Route,
} from "react-router-dom";
import Product from "./components/Products/Product/Product";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />

      </Routes>   
    </div>
  );
}

export default App;
