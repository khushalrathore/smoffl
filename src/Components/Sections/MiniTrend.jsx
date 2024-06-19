import React from 'react';
import styles from './MiniTrend.module.css';

function MiniTrend({ id, TrendImage, Title, Stats, Link }) {
  return (
    <div className={styles.miniTrendWrapper}>
      <div className={styles.hasID}>{id}</div>
      <div className={styles.miniTrend}>
        <div
          className={styles.miniTrendImage}
          style={{ backgroundImage: `url(${TrendImage})` }}
        ></div>
        <div className={styles.miniTrendText}>
          <p className={styles.miniTrendTitle}>{Title}</p>
          <p className={styles.miniTrendStats} >
            {Stats} Views&nbsp;&nbsp;•&nbsp;<a href={Link} style={{ color: `grey` }}>Check Now</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MiniTrend;
