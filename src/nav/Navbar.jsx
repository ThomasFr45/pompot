import "./Navbar.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({setLanguage}) => {

  const handleLanguage = (e) => {
    if (e.target.value !== localStorage.getItem("language")) {
      localStorage.setItem("language", e.target.value);
      setLanguage(e.target.value);
    }
  };

  return (
    <div className="nav">
      <div>
        <Link to="">
          <img src={logo} alt="logo" className="navLogo" />
        </Link>
      </div>
      <div className="navLinks">
      <Link to="celestial-corridor">
          <p className="navBaseLink">TEMP</p>
          <p className="navCC">CC</p>
        </Link>
        <Link to="Glyphs">
          <p>Glyphs</p>
        </Link>
        <Link to="haven-of-oblivion">
          <p className="navHoO">HoO</p>
          <p className="navBaseLink">TEMP</p>
        </Link>
      </div>
      <div>
        <span>
          <select onChange={(e) => handleLanguage(e)} className="language-drop">
            <option value="none">{localStorage.getItem("language") ? localStorage.getItem("language") : 'FR'}</option>
            <option value="FR">FR</option>
            <option value="EN">EN</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
