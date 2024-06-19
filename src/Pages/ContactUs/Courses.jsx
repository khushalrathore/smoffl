import styles from './Courses.module.css'
function Courses() {
  return (
    <div className={styles.coursesDiv}>
      <div className={styles.coursesDivHeading}>
        <div>
          <span>Video Editing Courses</span>
          <button>&gt;</button>
          <button>&gt;</button>
        </div>
      </div>
      <div className={styles.coursesDivContent}>

      </div>
    </div>

  )
}
export default Courses;