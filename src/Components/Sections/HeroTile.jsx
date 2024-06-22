import styles from './HeroTile.module.css';
import { heroItem } from '../../Pages/0/PagesData.jsx';
function HeroTile({ Title, Link, Img }) {
  return (
    <div className={styles.tileBox}>
      <div className={styles.tileBoxBg} style={{ background: `url(${Img}) no-repeat center center` }} ></div>
      <p>{Title}</p>
    </div>
  );
}
export default HeroTile;


