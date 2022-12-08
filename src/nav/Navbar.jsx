import "./Navbar.css";
import logo from "../img/dumas.png";
import slurp from "../img/slurp.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Link to="">
          <img src={logo} alt="logo" className="navLogo" />
        </Link>
      </div>
      <div className="navLinks">
        <Link to="celestial-corridor">
          <p>Celestial Corridor</p>
        </Link>
        <Link to="Abyss">
          <p>Abyss</p>
        </Link>
        <Link to="haven-of-oblivion">
          <p>Haven Of Oblivion</p>
        </Link>
      </div>
      <div>
        <img src={slurp} alt="toutou" className="navToutou" />
      </div>
    </div>
  );
};

export default Navbar;
