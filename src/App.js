/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
