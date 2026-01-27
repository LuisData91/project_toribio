import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#inicio" onClick={handleNavClick}>
          <img className="navbar__logo" src={logo} alt="Logo HIA" />
        </a>

        <button
          className={`navbar__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? "is-open" : ""}`}>
          <a href="#inicio" onClick={handleNavClick}>Inicio</a>
          <a href="#nosotros" onClick={handleNavClick}>Nosotros</a>
          <a href="#servicios" onClick={handleNavClick}>Servicios</a>
          <a href="#productos" onClick={handleNavClick}>Productos</a>
          <a href="#contacto" onClick={handleNavClick}>Contacto</a>

          {/* <a className="navbar__cta" href="https://wa.me/51942145733?text=Hola,%20quisiera%20una%20cotización" target="_blank" rel="noreferrer">
            Pedir cotización
          </a> */}
        </nav>

        {/* CTA desktop (se oculta en móvil) */}
        <a className="navbar__cta navbar__cta--desktop" href="https://wa.me/51962740682?text=Hola,%20quisiera%20una%20cotización" target="_blank" rel="noreferrer">
          Pedir cotización
        </a>
      </div>
    </header>
  );
}
