import styles from './Hero.module.css'
import img_course1 from '../../assets/product-box-mockup.png'
import img_course13d from '../../assets/product-box-mockup2.png'
import HeroTile from './HeroTile';
export const heroItem = {
  first: {
    Accent: '#097969',
    Title: 'Premiere Pro 101',
    Desc: 'Unlock your creative potential with our comprehensive video editing courses. Learn advanced techniques and transform your ideas into stunning visuals.',
    Img: img_course13d,
    Link: '/',
  },

}
function Hero() {
  const titleBg = ['url(${heroItem.first.Img})', 'black']
  return (
    <>
      <div className={styles.heroDiv}>
        <div className={styles.heroDivBg} style={{ background: `linear-gradient(${heroItem.first.Accent} 0%, rgba(255, 255, 255, 0.006) 90%)` }}></div>
        <div className={styles.heroDiv1} >
          <div className={styles.mini} style={{ background: `url(${heroItem.first.Img})no-repeat center center` }}></div>
          <span className={styles.title} style={{ background: `${titleBg[1]}` }}>{heroItem.first.Title}</span>
          <p className={styles.description}>{heroItem.first.Desc}</p>
          <a href={heroItem.first.Link}><button>Learn More</button></a>
        </div>
        <div className={styles.heroDiv2} style={{ background: `url(${heroItem.first.Img})no-repeat center center` }}></div>
      </div >
      <div className={styles.section2}>
        <HeroTile Title={heroItem.first.Title} Link={heroItem.first.Link} Img={heroItem.first.Img} />
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