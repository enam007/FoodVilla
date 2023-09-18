import { Link } from "react-router-dom";
const NavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default NavItems;
