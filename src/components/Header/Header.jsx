import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2>
        Dev <span>/</span>
      </h2>
      <nav className="menu-bar">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#home" className="menu-link active">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#about" className="menu-link">
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#projects" className="menu-link">
              Services
            </a>
          </li>
          <li className="menu-item">
            <a href="#contact" className="menu-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
