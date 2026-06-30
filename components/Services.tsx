"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";

const services = [
  {
    title: "Carga sobredimensionada / sobrepeso",
    text: "Traslado de piezas, estructuras o maquinaria que superan medidas o pesos estándar. Requiere planificación, equipo adecuado y coordinación en ruta.",
    icon: "/Transporte-de-carga-sobredimensionada---sobrepeso.webp",
  },
  {
    title: "Transporte de BESS",
    text: "Traslado de sistemas o módulos de almacenamiento energético. Servicio enfocado en cuidado de la carga, coordinación técnica y operación segura.",
    icon: "/Transporte-de-BESS.webp",
  },
  {
    title: "Carga peligrosa",
    text: "Servicio para cargas que requieren protocolos especiales, seguridad operacional y unidades aptas para transporte industrial.",
    icon: "/Transporte-de-carga-peligrosa.webp",
  },
  {
    title: "Servicio de logística",
    text: "Coordinación de rutas, equipos, tiempos y disponibilidad para operaciones de transporte puntuales o programadas.",
    icon: "/Servicio-de-logistica.webp",
  },
  {
    title: "Servicio de almacenaje",
    text: "Apoyo para resguardo y manejo de carga, con capacidad informada de 15.000 m³ disponibles.",
    icon: "/Servicio-de-almacenaje.webp",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -90px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className={`${styles.services} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>Servicios</span>

            <h2 className={styles.title}>
              Servicios de transporte, logística y apoyo operativo
            </h2>
          </div>

          <p className={styles.intro}>
            Soluciones para operaciones que requieren coordinación técnica,
            seguridad operacional y capacidad de respuesta en terreno.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              className={styles.card}
              key={service.title}
              style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <img src={service.icon} alt="" loading="lazy" />
                </div>

                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <span className={styles.cardLine} />
            </article>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <a
            className={styles.whatsappButton}
            href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
            target="_blank"
            rel="noreferrer"
          >
            <img src="/WSP blanco.webp" alt="" loading="lazy" />
            <span>Solicitar cotización por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}