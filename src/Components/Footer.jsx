import styles from './Footer.module.css'
function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerMainDiv1}><a href='/'>ShineMoon</a></div>
      <div className={styles.footerMainDiv2}>
        <div className={styles.footerCard}></div>
        <>
          <ul>Sitemap
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Portfolio</a></li>
            <li><a href='/'>Courses</a></li>
            <li><a href='/'>Team</a></li>
            <li><a href='/'>Contact Us</a></li>
          </ul>
          <ul>Resources
            <li><a href='/'>Blog</a></li>
            <li><a href='/'>Newsletter</a></li>
            <li><a href='/'>Courses</a></li>
          </ul>
          <ul>Legal
            <li><a href='/'>Terms of Use</a></li>
            <li><a href='/'>Privacy Policy</a></li>
          </ul>
          <ul>Support
            <li><a href='https://www.instagram.com/ig_shinemoon/'><span style={{ fontFamily: `system-ui`, marginInline: `3px`, fontSize: `18px` }}>@</span>ig_shinemoon</a></li>
            <li><a href='mailto: support@shinemoon.in'>support<span style={{ fontFamily: `system-ui`, marginInline: `3px`, fontSize: `18px` }}>@</span>shinemoon.in</a></li>
          </ul>
        </>
      </div>
      <div className={styles.footerMainDiv3}>
        <span><span style={{ fontFamily: `system-ui`, marginInline: `3px`, fontSize: `18px` }}>&copy;</span>{date} <a href='/'>shinemoon.in</a></span>
        <ul>
          <li><a href='https://x.com/shinemoon221/'>Twitter</a></li>
          <li><a href='https://www.youtube.com/channel/UCSWjcz32WGRPjEteBcE0tvA'>Youtube</a></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;