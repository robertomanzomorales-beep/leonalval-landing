import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
      target="_blank"
      rel="noreferrer"
      className={styles.whatsappButton}
      aria-label="Cotizar por WhatsApp"
    >
      <span className={styles.pulse} />
      <img src="/WSP blanco.webp" alt="" />
    </a>
  );
}