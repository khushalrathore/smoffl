import styles from './Hero.module.css'
import HeroTile from './HeroTile';
export const heroItem = {
  first: {
    Accent: 'darkblue',
    Title: 'Premiere Pro 101',
    Desc: 'Unlock your creative potential with our comprehensive video editing courses. Learn advanced techniques and transform your ideas into stunning visuals.',
    Img: 'https://img-c.udemycdn.com/course/750x422/3831056_e098_8.jpg',
    Link: '/',
  },

}
function Hero() {

  return (
    <>
      <div className={styles.heroDiv}>
        <div className={styles.heroDivBg} style={{ background: `linear-gradient(${heroItem.first.Accent} 0%, rgba(255, 255, 255, 0.006) 90%)` }}></div>
        <div className={styles.heroDiv1} >
          <div className={styles.mini} style={{ background: `url(${heroItem.first.Img})no-repeat center center` }}></div>
          <span className={styles.title} style={{ background: `url(${heroItem.first.Img})` }}>{heroItem.first.Title}</span>
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