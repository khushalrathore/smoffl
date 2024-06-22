import styles from './CourseItemDescription.module.css'
function CourseItemDescription({ Image, Desc, Title }) {
  return (
    <div className={styles.CourseItemDescriptionDiv}>
      <div className={styles.CourseItemDescTitle}>{Title}</div>
      <div className={styles.CourseItemDescDesc}>{Desc}</div>
      <div className={styles.CourseItemDescImage} style={{ background: `url(${Image})no-repeat center center` }}></div>
      <a href='#'><button>Buy Now</button></a>
    </div>
  );
}
export default CourseItemDescription;