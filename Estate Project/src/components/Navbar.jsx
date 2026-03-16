import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          SAGE <span>Properties</span>
        </a>
        <ul className="nav-links">
          <li>
            <a onClick={() => scrollTo("listings")}>Buy</a>
          </li>
          <li>
            <a onClick={() => scrollTo("listings")}>Rent</a>
          </li>
          <li>
            <a onClick={() => scrollTo("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollTo("contact")}>Contact</a>
          </li>
        </ul>
        <div className="nav-right">
          <a href="tel:+2348145158639" className="nav-phone">
            +234 814 515 8639
          </a>
          <button className="nav-btn" onClick={() => scrollTo("contact")}>
            List Property
          </button>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((m) => !m)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a onClick={() => scrollTo("listings")}>Buy</a>
        <a onClick={() => scrollTo("listings")}>Rent</a>
        <a onClick={() => scrollTo("about")}>About</a>
        <a onClick={() => scrollTo("contact")}>Contact</a>
        <a onClick={() => scrollTo("contact")} className="mobile-cta">
          List Property
        </a>
      </div>
    </>
  );
}
