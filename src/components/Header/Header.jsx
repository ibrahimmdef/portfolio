import "./Header.css";

function Header() {
  function responsiveMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      mobileMenu.textContent = "✕";
    } else {
      mobileMenu.textContent = "☰";
    }

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        mobileMenu.textContent = "☰";
      });
    });
  }
  return (
    <header className="header">
      <h2>
        Dev <span>/</span>
      </h2>
      <nav className="menu-bar">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#home" className="menu-link ">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#projects" className="menu-link">
              Projects
            </a>
          </li>
          <li className="menu-item">
            <a href="#about" className="menu-link">
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#contact" className="menu-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu" onClick={responsiveMenu}>
        ☰
      </div>
    </header>
  );
}

export default Header;
