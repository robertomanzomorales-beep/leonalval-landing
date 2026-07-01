"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Flota", href: "#flota" },
  { label: "Galería", href: "#galeria" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    closeMenu();

    if (typeof window === "undefined") return;

    if (href === "#inicio") {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const target = document.querySelector(href);

    if (target) {
      const headerOffset = 74;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });

      history.replaceState(null, "", href);
    }
  };

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          open ? styles.open : ""
        }`}
      >
        <div className={styles.inner}>
          <a
            href="#inicio"
            className={styles.logoLink}
            onClick={(event) => handleNavClick(event, "#inicio")}
          >
            <img
              src="/logo-transportes-leonalval-header-retina-440w.webp"
              alt="Transportes Leonalval"
              className={styles.logo}
            />
          </a>

          <nav className={styles.desktopNav} aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.label}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
            target="_blank"
            rel="noreferrer"
            className={styles.desktopCta}
          >
            Cotizar
          </a>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileGlow} aria-hidden="true" />

          <div className={styles.mobilePanel}>
            <div className={styles.mobileTop}>
              <span className={styles.mobileLabel}>Menú principal</span>
              <span className={styles.mobileHint}>Transportes Leonalval</span>
            </div>

            <nav className={styles.mobileNav} aria-label="Navegación móvil">
              {navItems.map((item, index) => (
                <a
                  href={item.href}
                  key={item.label}
                  onClick={(event) => handleNavClick(event, item.href)}
                  style={
                    {
                      "--delay": `${index * 38}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div className={styles.mobileBottom}>
              <a
                href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
                target="_blank"
                rel="noreferrer"
                className={styles.mobileCta}
                onClick={closeMenu}
              >
                Solicitar cotización
              </a>

              <a href="tel:+56998828315" className={styles.mobilePhone}>
                +56 9 9882 8315
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}