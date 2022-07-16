import "./App.css";
import Navbar from "./Components/Home/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Team from "./Components/Team";
import Login from "./Components/Login";
import Blog from "./Components/Blog";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
