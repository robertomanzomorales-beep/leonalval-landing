import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Flota", href: "#flota" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.transitionBar} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="#inicio" className={styles.logoLink} aria-label="Ir al inicio">
            <img
              src="/logo-transportes-leonalval-header-retina-440w.webp"
              alt="Transportes Leonalval"
              className={styles.logo}
              loading="lazy"
            />
          </a>

          <p>
            Transporte de carga especializada, logística y apoyo operativo para
            operaciones industriales que requieren seguridad, coordinación y
            capacidad de respuesta.
          </p>

          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/transportesleonalval/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <img src="/Instgram.webp" alt="" loading="lazy" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Navegación del footer">
          <span className={styles.columnTitle}>Navegación</span>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <span className={styles.columnTitle}>Contacto</span>

          <div className={styles.contactList}>
            <a href="tel:+56998828315" className={styles.contactItem}>
              <span className={styles.iconBox}>
                <img src="/Llamar blanco.webp" alt="" loading="lazy" />
              </span>

              <span>
                <small>Llamar / WhatsApp</small>
                <strong>+56 9 9882 8315</strong>
              </span>
            </a>

            <a
              href="https://www.google.com/maps/place/Transportes+Leonalval+-+GH2J%2BF5,+Antofagasta/data=!4m2!3m1!1s0x96ae29a29dbe61d3:0xf015d0eef7e5750a!18m1!1e1?utm_source=mstt_1&entry=gps"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <span className={styles.iconBox}>
                <img src="/Ubicacion blanco.webp" alt="" loading="lazy" />
              </span>

              <span>
                <small>Ubicación</small>
                <strong>
                  Transversal 18-0500 Lote A, La Portada, Antofagasta.
                </strong>
              </span>
            </a>

            <a
              href="https://leonalval.cl"
              target="_blank"
              rel="noreferrer"
              className={styles.contactItem}
            >
              <span className={styles.iconBox}>
                <img src="/Sitio Web Blanco.webp" alt="" loading="lazy" />
              </span>

              <span>
                <small>Sitio web</small>
                <strong>leonalval.cl</strong>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.cta}>
          <span className={styles.columnTitle}>Cotización</span>

          <h3>Coordinemos tu próximo transporte</h3>

          <p>
            Envíanos origen, destino, tipo de carga, medidas, peso aproximado y
            fecha estimada de operación.
          </p>

          <a
            href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
            target="_blank"
            rel="noreferrer"
            className={styles.ctaButton}
          >
            Solicitar cotización
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>
            © {year} Transportes Leonalval. Todos los derechos reservados.
          </span>

          <a href="https://vialoop.cl" target="_blank" rel="noreferrer">
            Diseñado y potenciado por Vialoop.cl
          </a>
        </div>
      </div>
    </footer>
  );
}