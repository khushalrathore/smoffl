import styles from './Stats.module.css'
function Stats() {
  return (
    <div className={styles.statsDiv}>
      <p>Master video editing with our expert-led courses.</p>
      <div className={styles.miniStatWrapper}>
        <div className={styles.miniStat}>
          <span>+1K</span>
          <p>Courses sold</p>
        </div>

        <div className={styles.miniStat}>
          <span>+800</span>
          <p>5-star Reviews</p>
        </div>

        <div className={styles.miniStat}>
          <span>+30K</span>
          <p>Community</p>
        </div>
      </div>

    </div>
  );
}
export default Stats;