"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Clients.module.css";

const clients = [
  {
    name: "Bertling",
    logo: "/bertling.webp",
  },
  {
    name: "Corssen",
    logo: "/corssen.webp",
  },
  {
    name: "EPSA",
    logo: "/epsa.webp",
  },
  {
    name: "Implementos",
    logo: "/implementos.webp",
  },
  {
    name: "Maco",
    logo: "/maco.webp",
  },
  {
    name: "Maersk",
    logo: "/maersk.webp",
  },
  {
    name: "Mintral",
    logo: "/mintral.webp",
  },
  {
    name: "Rimex",
    logo: "/rimex-50-secondary-teal.webp",
  },
  {
    name: "Salfa",
    logo: "/salfa.webp",
  },
  {
    name: "Shell",
    logo: "/shell.webp",
  },
];

export default function Clients() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const duplicatedClients = [...clients, ...clients];

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
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clientes"
      className={`${styles.clients} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>Clientes</span>

            <h2 className={styles.title}>Empresas que confían en nosotros</h2>
          </div>

          <p className={styles.intro}>
            Colaboramos con empresas y proveedores vinculados a operaciones
            industriales, transporte, logística, minería y servicios en terreno.
          </p>
        </div>

        <div className={styles.logoArea} aria-label="Clientes y proveedores">
          <div className={styles.track}>
            {duplicatedClients.map((client, index) => (
              <div
                className={styles.logoCard}
                key={`${client.name}-${index}`}
                style={
                  {
                    "--delay": `${Math.min(index, clients.length - 1) * 55}ms`,
                  } as React.CSSProperties
                }
              >
                <img src={client.logo} alt={client.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>Clientes y proveedores estratégicos</span>
          <strong>{clients.length} marcas destacadas</strong>
        </div>
      </div>
    </section>
  );
}