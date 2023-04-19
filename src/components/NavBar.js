import "./Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h2>Furniture store</h2>
      <button className="buttons-navbar">Tecnología</button>
      <button className="buttons-navbar">Electro hogar</button>
      <button className="buttons-navbar">Muebles</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
