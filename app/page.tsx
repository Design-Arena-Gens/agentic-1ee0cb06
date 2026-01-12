import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <section className={styles.canvas} aria-label="Cinematic architectural vista">
        <div className={styles.sky} />
        <div className={styles.stars} />
        <div className={styles.aurora} />
        <div className={styles.lensFlare} />
        <div className={styles.horizonGlow} />
        <div className={styles.skyline} />
        <div className={styles.building}>
          <div className={styles.ribbon} />
        </div>
        <div className={styles.foregroundFog} />
        <div className={styles.title}>
          <span className={styles.titleSmall}>Visionary Design</span>
          <span className={styles.titleLarge}>Skyline Echo</span>
        </div>
        <p className={styles.caption}>
          Neo-Vertical Habitat<br />
          Dawn District, 2049
        </p>
      </section>
    </main>
  );
}
