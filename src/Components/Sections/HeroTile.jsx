import styles from './HeroTile.module.css';
import { heroItem } from './Hero.jsx';
function HeroTile({ Title, Link, Img }) {
  return (
    <div className={styles.tileBox}>
      <p>{Title}</p>
    </div>
  );
}
export default HeroTile;