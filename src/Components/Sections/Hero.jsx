import styles from './Hero.module.css'
import HeroTile from './HeroTile';
import { heroItem } from '../../Pages/0/PagesData.jsx';

function Hero() {
  const titleBg = ['url(${heroItem[0].Img})', 'black']
  return (
    <>
      <div className={styles.heroDiv}>
        <div className={styles.heroDivBg} style={{ background: `linear-gradient(${heroItem[0].Accent} 0%, rgba(255, 255, 255, 0.006) 90%)` }}></div>
        <div className={styles.heroDiv1} >
          <div className={styles.mini} style={{ background: `url(${heroItem[0].Img})no-repeat center center` }}></div>
          <span className={styles.title} style={{ background: `${titleBg[1]}` }}>{heroItem[0].Title}</span>
          <p className={styles.description}>{heroItem[0].Desc}</p>
          <a href={heroItem[0].Link}><button>Buy Now</button></a>
        </div>
        <div className={styles.heroDiv2} style={{ background: `url(${heroItem[0].Img})no-repeat center center` }}></div>
      </div >
      <div className={styles.section2}>
        {heroItem.map((member) => (<HeroTile key={member.id} Title={member.Title} Link={member.Link} Img={member.Img} />))}
      </div>
    </>
  );
}
export default Hero;