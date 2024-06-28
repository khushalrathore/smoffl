import styles from './CourseListItem.module.css';

function CourseListItem({ Title, Image, Stats }) {
  return (
    <li className={styles.courseItemLi}>
      <div className={styles.liIcon} ></div>
      <div className={styles.liTextInfo}>
        <div className={styles.liHeading}>{Title}</div>
        <div className={styles.liStat}>{Stats}</div>
      </div>
    </li>
  );
}

export default CourseListItem;