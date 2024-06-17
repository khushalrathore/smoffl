import styles from './Trend.module.css'
function Trend() {
  const op1 = 'in the last two weeks';
  const op2 = 'in the last month';
  const op3 = 'off all time';
  return (
    <>
      <div className={styles.trendTitleDiv}>
        <p className={styles.trendTitle}>Trending<button>{op1}</button></p>
      </div>
    </>
  );
}
export default Trend;