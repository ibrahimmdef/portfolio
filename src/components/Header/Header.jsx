import { useEffect } from "react";
import "./Header.css";

function Header() {
  // Mobil menü toggle
  function responsiveMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      mobileMenu.textContent = "✕";
    } else {
      mobileMenu.textContent = "☰";
    }
  }

  // Smooth scroll ve mobil menüyü kapatma
  useEffect(() => {
    const links = document.querySelectorAll("nav a");

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(
        e.currentTarget.getAttribute("href")
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Mobil menüyü kapat
      const nav = document.querySelector("nav");
      const mobileMenu = document.querySelector(".mobile-menu");
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        mobileMenu.textContent = "☰";
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    // Cleanup
    return () =>
      links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  return (
    <header className="header">
      <h2>
        Dev <span>/</span>
      </h2>
      <nav className="menu-bar">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#home" className="menu-link">
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
