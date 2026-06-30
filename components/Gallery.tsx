"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Gallery.module.css";

const galleryImages = [
  {
    src: "/flota-camiones-patio-leonalval.webp",
    alt: "Flota de tractocamiones en patio de Transportes Leonalval",
  },
  {
    src: "/transporte-carga-sobredimensionada-en-ruta-minera.webp",
    alt: "Transporte de carga sobredimensionada en ruta minera",
  },
  {
    src: "/equipo-modular-transporte-carga-pesada-puerto.webp",
    alt: "Equipo modular transportando carga pesada en puerto",
  },
  {
    src: "/servicio-logistica-convoy-carga-sobredimensionada.webp",
    alt: "Convoy logístico para carga sobredimensionada",
  },
  {
    src: "/camas-bajas-transporte-maquinaria-pesada.webp",
    alt: "Cama baja transportando maquinaria pesada",
  },
  {
    src: "/transporte-bess-modulos-almacenamiento-energetico.webp",
    alt: "Transporte de módulos BESS de almacenamiento energético",
  },
  {
    src: "/maniobra-izaje-carga-pesada-puerto.webp",
    alt: "Maniobra de izaje de carga pesada en puerto",
  },
  {
    src: "/rampla-rebajada-drop-transporte-maquinaria.webp",
    alt: "Rampla rebajada drop transportando maquinaria",
  },
  {
    src: "/cama-baja-tipo-palote-transporte-equipo-industrial.webp",
    alt: "Cama baja tipo palote transportando equipo industrial",
  },
  {
    src: "/ramplas-convencionales-transporte-contenedor-industrial.webp",
    alt: "Rampla convencional transportando contenedor industrial",
  },
  {
    src: "/servicio-logistica-descarga-con-reach-stacker.webp",
    alt: "Servicio logístico de descarga con reach stacker",
  },
  {
    src: "/camas-bajas-transporte-maquinaria-minera-alto-tonelaje.webp",
    alt: "Camas bajas para maquinaria minera de alto tonelaje",
  },
  {
    src: "/transporte-carga-sobredimensionada-equipo-reach-stacker.webp",
    alt: "Transporte de equipo reach stacker como carga sobredimensionada",
  },
  {
    src: "/bateas-transporte-tolva-minera-komatsu.webp",
    alt: "Transporte de tolva minera Komatsu",
  },
  {
    src: "/maniobra-izaje-grua-carga-industrial.webp",
    alt: "Maniobra de izaje con grúa para carga industrial",
  },
  {
    src: "/rampla-rebajada-drop-transporte-equipo-minero.webp",
    alt: "Rampla rebajada drop transportando equipo minero",
  },
  {
    src: "/transporte-carga-sobredimensionada-maquinaria-en-terreno.webp",
    alt: "Transporte de maquinaria sobredimensionada en terreno",
  },
  {
    src: "/ramplas-extensibles-transporte-contenedor-y-neumaticos.webp",
    alt: "Ramplas extensibles para transporte de contenedor y neumáticos",
  },
  {
    src: "/galeria-carga-sobredimensionada-camion-ruta-faena.webp",
    alt: "Camión con carga sobredimensionada en ruta hacia faena",
  },
  {
    src: "/cama-baja-transporte-pieza-sobredimensionada-minera.webp",
    alt: "Cama baja transportando pieza sobredimensionada minera",
  },
  {
    src: "/rampla-rebajada-drop-transporte-camion-aljibe.webp",
    alt: "Rampla rebajada transportando camión aljibe",
  },
  {
    src: "/cama-baja-transporte-maquinaria-pesada-faena.webp",
    alt: "Cama baja transportando maquinaria pesada en faena",
  },
  {
    src: "/rampla-rebajada-transporte-maquinaria-oruga.webp",
    alt: "Rampla rebajada transportando maquinaria con orugas",
  },
  {
    src: "/cama-baja-transporte-equipo-oruga.webp",
    alt: "Cama baja transportando equipo con orugas",
  },
  {
    src: "/bateas-transporte-camion-minero-tonly.webp",
    alt: "Transporte de camión minero sobre cama baja",
  },
  {
    src: "/transporte-carga-peligrosa-modulo-industrial.webp",
    alt: "Transporte de módulo industrial con señalética de carga peligrosa",
  },
  {
    src: "/transporte-carga-peligrosa-modulo-blue-container.webp",
    alt: "Transporte de carga industrial con identificación de riesgo",
  },
  {
    src: "/equipo-modular-carga-pesada-maniobra-puerto.webp",
    alt: "Equipo modular en operación portuaria con carga de gran tonelaje",
  },
  {
    src: "/rampla-convencional-carga-estructuras-puerto.webp",
    alt: "Rampla convencional transportando estructuras en puerto",
  },
  {
    src: "/gruas-horquilla-equipos-disponibles.webp",
    alt: "Grúas horquilla disponibles para carga y descarga",
  },
  {
    src: "/reach-stacker-descarga-contenedores.webp",
    alt: "Reach stacker para descarga y movimiento de contenedores",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? galleryImages[activeIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length
    );
  };

  const scrollRail = (direction: "prev" | "next") => {
    const rail = railRef.current;

    if (!rail) return;

    const amount = Math.min(rail.clientWidth * 0.78, 860);

    rail.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(diff) > 48) {
      if (diff > 0) showNext();
      else showPrev();
    }

    touchStartX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className={`${styles.gallerySection} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className={styles.eyebrow}>Galería</span>

            <h2 className={styles.title}>
              Operaciones reales, flota y maniobras en terreno
            </h2>
          </div>

          <div className={styles.headerSide}>
            <p className={styles.intro}>
              Fotos reales de transporte especializado, carga sobredimensionada,
              equipos, maniobras y operación industrial.
            </p>

            <div className={styles.controls} aria-label="Controles galería">
              <button
                type="button"
                onClick={() => scrollRail("prev")}
                aria-label="Ver imágenes anteriores"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={() => scrollRail("next")}
                aria-label="Ver más imágenes"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <div className={styles.railShell}>
          <div className={styles.rail} ref={railRef}>
            {galleryImages.map((image, index) => (
              <button
                type="button"
                className={`${styles.item} ${
                  index % 7 === 0 ? styles.itemWide : ""
                }`}
                key={`${image.src}-${index}`}
                onClick={() => openLightbox(index)}
                style={
                  {
                    "--delay": `${Math.min(index, 10) * 55}ms`,
                  } as React.CSSProperties
                }
                aria-label={`Abrir imagen ${index + 1} de la galería`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />

                <span className={styles.openIcon} aria-hidden="true">
                  +
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <span>{galleryImages.length} fotografías de operación</span>

          <button
            type="button"
            className={styles.viewAll}
            onClick={() => openLightbox(0)}
          >
            Ver galería completa
          </button>
        </div>
      </div>

      {mounted &&
        isOpen &&
        activeImage &&
        createPortal(
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Galería de imágenes Transportes Leonalval"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className={styles.backdrop}
              onClick={closeLightbox}
              aria-label="Cerrar galería"
            />

            <button
              type="button"
              className={`${styles.lightboxButton} ${styles.closeButton}`}
              onClick={closeLightbox}
              aria-label="Cerrar"
            >
              ×
            </button>

            <button
              type="button"
              className={`${styles.lightboxButton} ${styles.prevButton}`}
              onClick={showPrev}
              aria-label="Imagen anterior"
            >
              ‹
            </button>

            <figure className={styles.lightboxImageWrap}>
              <img src={activeImage.src} alt={activeImage.alt} />
            </figure>

            <button
              type="button"
              className={`${styles.lightboxButton} ${styles.nextButton}`}
              onClick={showNext}
              aria-label="Imagen siguiente"
            >
              ›
            </button>

            <div className={styles.lightboxMeta}>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(galleryImages.length).padStart(2, "0")}
            </div>

            <div className={styles.lightboxThumbs}>
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  key={`${image.src}-thumb-${index}`}
                  className={`${styles.thumb} ${
                    index === activeIndex ? styles.thumbActive : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <img src={image.src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}