"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Fleet.module.css";

const fleetItems = [
  {
    title: "Ramplas convencionales",
    description:
      "Para carga general, materiales, insumos y estructuras que no requieren plataforma especial.",
    image: "/ramplas-convencionales.webp",
  },
  {
    title: "Ramplas rebajadas / drop",
    description:
      "Para cargas de mayor altura o maquinaria que requiere menor altura de plataforma para circular con seguridad.",
    image: "/drop-o-rampla-rebajada.webp",
  },
  {
    title: "Ramplas extensibles",
    description:
      "Para piezas largas, estructuras o cargas que necesitan ampliar el largo útil del equipo.",
    image: "/ramplas-extensibles.webp",
  },
  {
    title: "Camas bajas 3 ejes",
    description:
      "Para maquinaria pesada, equipos industriales y cargas de alto tonelaje.",
    image: "/camas-bajas-3-ejes.webp",
  },
  {
    title: "Camas bajas 4 ejes",
    description:
      "Equipo de apoyo para transporte de maquinaria pesada, estructuras y operaciones especiales.",
    image: "/camas-bajas-4-ejes.webp",
  },
  {
    title: "Cama baja tipo palote",
    description:
      "Equipo reforzado para cargas pesadas o de dimensiones particulares.",
    image: "/cama-baja-tipo-palote.webp",
  },
  {
    title: "Bateas",
    description:
      "Para traslado de áridos, material a granel o apoyo en faenas mineras e industriales.",
    image: "/bateas.webp",
  },
  {
    title: "Estanque de ácido sulfúrico",
    description:
      "Equipo especializado para transporte de líquido industrial con altos requisitos de seguridad.",
    image: "/estanque-acido.webp",
  },
  {
    title: "Equipo modular",
    description:
      "Para cargas de gran tonelaje, proyectos especiales y distribución controlada del peso.",
    image: "/equipo-modular.webp",
  },
];

export default function Fleet() {
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
        threshold: 0.14,
        rootMargin: "0px 0px -90px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="flota"
      className={`${styles.fleet} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>Flota y equipos</span>

            <h2 className={styles.title}>
              Equipos disponibles para operaciones industriales
            </h2>
          </div>

          <p className={styles.intro}>
            Contamos con equipamiento preparado para transporte especializado,
            maniobras, carga pesada y apoyo operativo en terreno.
          </p>
        </div>

        <div className={styles.grid}>
          {fleetItems.map((item, index) => (
            <article
              className={`${styles.card} ${
                index === 0 || index === 8 ? styles.cardWide : ""
              }`}
              key={item.title}
              style={
                {
                  "--delay": `${index * 70}ms`,
                } as React.CSSProperties
              }
            >
              <img src={item.image} alt={item.title} loading="lazy" />

              <div className={styles.overlay}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <span className={styles.corner} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}