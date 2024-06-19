import React from 'react';
import styles from './RecentItem.module.css';

function RecentItem({ TrendImage, Title, Stats, Link, Color }) {
  Color = ''
  return (
    <div className={styles.recentItemWrapper}>
      <div className={styles.recentItem} style={{ boxShadow: `0 0 30px ${Color} opacity 0.5` }}>
        <div
          className={styles.recentItemImage}
          style={{ backgroundImage: `url(${TrendImage})` }}
        ></div>
        <div className={styles.recentItemText}>
          <p className={styles.recentItemTitle}>{Title}</p>
          <p className={styles.recentItemStats} >
            {Stats} Views &nbsp; • <a href={Link} style={{ color: `grey` }}>Check now</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecentItem;
