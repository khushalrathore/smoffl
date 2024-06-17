import styles from './Hero.module.css'
import HeroTile from './HeroTile';
const heroItem = {
  first: {
    Img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGR2YW5nb2doLXNlbGYtcG9ydHJhaXQtbTAxLWpvYjY2MV8yLWwxMDBvNmVmLmpwZw.jpg',
    Accent: 'black'
  }
}
const desc1 = 'Unlock your creative potential with our comprehensive video editing courses. Learn advanced techniques and transform your ideas into stunning visuals.'
function Hero() {

  return (
    <>
      <div className={styles.heroDiv}>
        <div className={styles.heroDivBg} style={{ background: `linear-gradient(${heroItem.first.Accent} 0%, rgba(255, 255, 255, 0.006) 90%)` }}></div>
        <div className={styles.heroDiv1} >
          <div className={styles.mini} style={{ background: `url(${heroItem.first.Img})no-repeat center center` }}></div>
          <span className={styles.title}>Premiere Pro 101</span>
          <p className={styles.description}>{desc1}</p>
          <button>Learn More</button>
        </div>
        <div className={styles.heroDiv2} style={{ background: `url(${heroItem.first.Img})no-repeat center center` }}></div>
      </div>
      <div className={styles.section2}>
        <HeroTile />
        <HeroTile />
        <HeroTile />
        <HeroTile />
        <HeroTile />
        <HeroTile />
      </div>
    </>
  );
}
export default Hero;