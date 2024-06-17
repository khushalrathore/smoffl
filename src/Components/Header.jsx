import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.headerMain}>
      <div className={styles.logoDivWrapper}>
        <div className={styles.logoDiv}></div>
        <span>ShineMoon</span>
      </div>
      <nav className={styles.bigNav}>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Portfolio</a></li>
          <li><a href='/'>Courses</a></li>
          <li><a href='/'>Team</a></li>
          <li><a href='/'>Contact Us</a></li>
          <div>=</div>
        </ul>
      </nav>

    </header>
  )
}
export default Header;