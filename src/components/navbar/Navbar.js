/** @format */

// import "./index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/"><button>login</button></Link>
      <Link to="/home"><button>home</button></Link>
      <Link to="/cart"><button>cart</button></Link>
    </div>
  );
};

export default Navbar;
