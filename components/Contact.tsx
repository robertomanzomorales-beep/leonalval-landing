"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/contacto@leonalval.cl";

const serviceOptions = [
  "Transporte de carga sobredimensionada / sobrepeso",
  "Transporte de BESS",
  "Transporte de carga peligrosa",
  "Servicio de logística",
  "Servicio de almacenaje",
  "Otro servicio",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current || status === "sending") return;

    setStatus("sending");

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      formRef.current.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className={`${styles.contact} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Contacto</span>

          <h2 className={styles.title}>Cotiza tu próximo servicio de transporte</h2>

          <p className={styles.intro}>
            Contáctanos para coordinar transporte, logística, carga especializada
            o almacenaje. Revisaremos los antecedentes y responderemos a la brevedad.
          </p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.side}>
            <div className={styles.contactBlock}>
              <span className={styles.blockLabel}>Atención comercial</span>

              <div className={styles.directList}>
                <a href="mailto:contacto@leonalval.cl">
                  <span>Correo principal</span>
                  <strong>contacto@leonalval.cl</strong>
                </a>

                <a href="mailto:l.alvarez@leonalval.cl">
                  <span>Correo directo</span>
                  <strong>l.alvarez@leonalval.cl</strong>
                </a>

                <a
                  href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>WhatsApp / teléfono</span>
                  <strong>+56 9 9882 8315</strong>
                </a>

                <a href="tel:+56926383476">
                  <span>Teléfono secundario</span>
                  <strong>+56 9 2638 3476</strong>
                </a>
              </div>
            </div>

            <div className={styles.addressBlock}>
              <span className={styles.blockLabel}>Ubicación</span>

              <h3>Transportes Leonalval</h3>

              <p>Transversal 18-0500 Lote A, La Portada, Antofagasta.</p>

              <a
                href="https://www.google.com/maps/place/Transportes+Leonalval+-+GH2J%2BF5,+Antofagasta/data=!4m2!3m1!1s0x96ae29a29dbe61d3:0xf015d0eef7e5750a!18m1!1e1?utm_source=mstt_1&entry=gps"
                target="_blank"
                rel="noreferrer"
                className={styles.routeButton}
              >
                Cómo llegar
              </a>
            </div>
          </aside>

          <div className={styles.mapPanel}>
            <iframe
              title="Mapa Transportes Leonalval"
              src="https://www.google.com/maps?q=Transportes%20Leonalval%20Antofagasta%20Transversal%2018-0500%20Lote%20A%20La%20Portada&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className={styles.formPanel}>
            <div className={styles.formHeader}>
              <span>Solicitud de cotización</span>
              <strong>Cuéntanos qué necesitas transportar</strong>
            </div>

            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="_subject"
                value="Nueva cotización desde sitio web Transportes Leonalval"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className={styles.fieldGroup}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Nombre y apellido"
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="empresa">Empresa</label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="telefono">Teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+56 9..."
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="correo">Correo</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="correo@empresa.cl"
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="servicio">Servicio de interés</label>
                <select id="servicio" name="servicio" required defaultValue="">
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>

                  {serviceOptions.map((service) => (
                    <option value={service} key={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="origenDestino">Origen / destino</label>
                <input
                  id="origenDestino"
                  name="origen_destino"
                  type="text"
                  placeholder="Ej: Antofagasta / faena / puerto"
                />
              </div>

              <div className={`${styles.fieldGroup} ${styles.full}`}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  placeholder="Indica tipo de carga, medidas, peso aproximado, fechas y antecedentes relevantes."
                  required
                />
              </div>

              <div className={styles.actions}>
                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Enviando..." : "Enviar solicitud"}
                </button>

                <a
                  className={styles.whatsappButton}
                  href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/WSP blanco.webp" alt="" loading="lazy" />
                  WhatsApp
                </a>
              </div>

              {status === "success" && (
                <p className={styles.successMessage}>
                  Mensaje enviado correctamente. Te contactaremos a la brevedad.
                </p>
              )}

              {status === "error" && (
                <p className={styles.errorMessage}>
                  No se pudo enviar el mensaje. Intenta nuevamente o escríbenos por WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}