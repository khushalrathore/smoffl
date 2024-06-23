import styles from './Hero.module.css';
import HeroTile from './HeroTile';
import { heroItem } from '../../Pages/0/PagesData.jsx';
import { useEffect, useState } from 'react';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroItem.length);
    }, 5000); // milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {heroItem.map((item, index) => (
            <div className={styles.heroDiv} key={index}>
              <div className={styles.heroDivBg} style={{ background: `linear-gradient(${item.Accent} 30%, rgba(255, 255, 255, 0.006) 100%)` }}></div>
              <div className={styles.heroDiv1}>
                <div className={styles.mini} style={{ background: `url(${item.Img}) no-repeat center center` }}></div>
                <span className={styles.title} style={{ background: `linear-gradient(-20deg,${item.Accent}, rgba(0,0,0,0.5))` }}>{item.Title}</span>
                <p className={styles.description}>{item.Desc}</p>
                <a href={item.Link}><button>{item.BtnText}</button></a>
              </div>
              <div className={styles.heroDiv2} style={{ background: `url(${item.Img}) no-repeat center center` }}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section2}>
        {heroItem.map((member) => (<HeroTile key={member.id} Title={member.Title} Link={member.Link} Img={member.Img} />))}
      </div>
    </>
  );
}

export default Hero;
