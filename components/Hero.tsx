import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Transportes Leonalval</span>

          <h1 className={styles.title}>
            Transporte de carga especializada para minería, industria y logística
          </h1>

          <p className={styles.text}>
            Soluciones logísticas seguras y eficientes para carga sobredimensionada,
            sobrepeso, peligrosa y proyectos especiales.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/56998828315?text=Hola,%20quiero%20cotizar%20un%20servicio%20de%20transporte%20con%20Transportes%20Leonalval."
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.primary}`}
            >
              Solicitar cotización
            </a>

            <a href="#servicios" className={`${styles.btn} ${styles.secondary}`}>
              Ver servicios
            </a>
          </div>

          <aside className={styles.data}>
            <div className={styles.dataItem}>
              <span className={styles.dataLabel}>Especialistas en</span>
              <strong className={styles.dataValue}>
                Carga sobredimensionada y sobrepeso
              </strong>
            </div>

            <div className={styles.dataItem}>
              <span className={styles.dataLabel}>Operación</span>
              <strong className={styles.dataValue}>
                Minería · Industria · Logística
              </strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}