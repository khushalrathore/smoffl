import styles from './Blogs.module.css'
function Blogs() {
  return (
    <div className={styles.blogsDiv}>
      <div className={styles.blogsDivHeading}>
        <div><span>Blogs</span><p>Unveiling the Art of Video Editing and Creative Expression</p></div>
        <button>View All Blogs</button>
      </div>
      <div className={styles.blogsDivContent}>
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
}
export default Blogs;