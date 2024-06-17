import styles from './Hero.module.css'
import HeroTile from './HeroTile';
const desc1 = 'Unlock your creative potential with our comprehensive video editing courses. Learn advanced techniques and transform your ideas into stunning visuals.'
function Hero() {

  return (
    <>
      <div className={styles.heroDiv}>
        <div className={styles.heroDiv1}>
          <div className={styles.mini}></div>
          <span className={styles.title}>Premiere Pro 101</span>
          <p className={styles.description}>{desc1}</p>
          <button>Learn More</button>
        </div>
        <div className={styles.heroDiv2}></div>
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