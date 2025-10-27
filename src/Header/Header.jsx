// Header.jsx
import "./Header.css";
import logo from "../assets/Weatherly_App_logo.png"; //

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header-logo" />
            <span>Weatherly</span>
        </header>
    );
}

export default Header;
