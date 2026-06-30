"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

export default function About() {
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
        threshold: 0.18,
        rootMargin: "0px 0px -90px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="quienes-somos"
      className={`${styles.about} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Quiénes somos</span>

          <h2 className={styles.title}>
            Experiencia logística para operaciones exigentes
          </h2>

          <p className={styles.lead}>
            Transportes Leonalval entrega servicios logísticos personalizados
            para clientes que requieren soluciones de transporte confiables,
            seguras y coordinadas.
          </p>

          <div className={styles.statements}>
            <article className={styles.statement}>
              <strong>Misión</strong>
              <p>
                Otorgar servicios logísticos de excelencia y personalizados,
                cubriendo necesidades operacionales con puntualidad, seguridad
                y calidad.
              </p>
            </article>

            <article className={styles.statement}>
              <strong>Visión</strong>
              <p>
                Posicionarse como líderes en servicios integrales, con calidad
                garantizada, trabajo en equipo, respeto, seguridad y desarrollo
                profesional.
              </p>
            </article>
          </div>

          <div className={styles.capabilities}>
            <div>
              <strong>Operación segura</strong>
              <span>Coordinación técnica para servicios especializados.</span>
            </div>

            <div>
              <strong>Respuesta integral</strong>
              <span>Transporte, logística, descarga y apoyo operativo.</span>
            </div>

            <div>
              <strong>Terreno industrial</strong>
              <span>Equipos disponibles para faena, puerto e industria.</span>
            </div>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.mediaTitle}>
            <span>Operaciones reales</span>
            <strong>Flota, equipos y soporte logístico</strong>
          </div>

          <div className={styles.gallery}>
            <figure className={`${styles.photo} ${styles.photoLarge}`}>
              <img
                src="/gruas-horquilla-equipos-disponibles.webp"
                alt="Grúas horquilla disponibles de Transportes Leonalval"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className={styles.photo}>
              <img
                src="/equipo-modular-transporte-carga-pesada-puerto.webp"
                alt="Equipo modular para transporte de carga pesada"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className={styles.photo}>
              <img
                src="/reach-stacker-descarga-contenedores.webp"
                alt="Reach stacker para descarga y movimiento de contenedores"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}