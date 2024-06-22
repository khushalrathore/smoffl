import { coursesInfo } from '../0/PagesData';
import styles from './Courses.module.css';
import CourseListItem from './CourseListItem';
import CourseItemDescription from './CourseItemDescription';

function Courses() {
  return (
    <div className={styles.coursesDiv}>
      <div className={styles.coursesDivHeading}>
        <div>
          <span className={styles.newCourses}>New Courses</span>
          <span className={styles.allCourses}>All Courses</span>
        </div>
      </div>
      <div className={styles.coursesDivContent}>
        <div className={styles.coursesList}>
          {coursesInfo.map((member) => <CourseListItem key={member.id} Title={member.title} Image={member.icon} Stats={member.time} />)}
        </div>
        <div className={styles.courseDesc}>
          {coursesInfo.map((member) => <CourseItemDescription key={member.id} Title={member.title} Image={member.icon} Desc={member.desc} />)}
        </div>
      </div>
    </div>
  );
}

export default Courses;