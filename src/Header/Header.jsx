// Header.jsx
import "./Header.css";
import logo from "../assets/Weatherly_App.png"; // Pfad zum PNG

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header-logo" />
            <span>Weatherly</span>
        </header>
    );
}

export default Header;
