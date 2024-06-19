import styles from './Stats.module.css'
function Stats() {
  return (
    <div className={styles.statsDiv}>
      <p>My Video Editing career in numbers</p>
      <div className={styles.miniStatWrapper}>
        <div className={styles.miniStat}>
          <span>+50K</span>
          <p>Editing Hours</p>
        </div>

        <div className={styles.miniStat}>
          <span>+800</span>
          <p>Happy clients
          </p>
        </div>

        <div className={styles.miniStat}>
          <span>+2K</span>
          <p>Community</p>
        </div>
      </div>

    </div>
  );
}
export default Stats;