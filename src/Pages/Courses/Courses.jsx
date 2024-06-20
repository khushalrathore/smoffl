import styles from './Courses.module.css'
function Courses() {
  return (
    <div className={styles.coursesDiv}>
      <div className={styles.coursesDivHeading}>
        <div>
          <span>Continue Courses</span>
          <span>New Courses</span>
          <span>All Courses</span>
          <span>Finished Courses</span>
        </div>
      </div>
      <div className={styles.coursesDivContent}>

      </div>
    </div>

  )
}
export default Courses;