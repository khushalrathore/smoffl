import { useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  function gotoHome() {
    window.location.href = '/';
  }
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.headerMain}`);
      if (window.scrollY > 0) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.headerMain}>
      <div className={styles.logoDivWrapper} onClick={gotoHome}>
        <div className={styles.logoDiv}></div>
        <span>ShineMoon</span>
      </div>
      <nav className={styles.bigNav}>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Portfolio</a></li>
          <li><a href='/courses'>Courses</a></li>
          <li><a href='/'>Team</a></li>
          <li><a href='/contact-us'>Contact Us</a></li>
          <div>=</div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
