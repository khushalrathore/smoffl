import styles from './HeroTile.module.css';
function HeroTile({ Title, Link, Img }) {
  return (
    <div className={styles.tileBox}>
      <a href={Link} className={styles.blockOver}></a>
      <div className={styles.tileBoxBg} style={{ background: `url(${Img}) no-repeat center center` }} ></div>
      <p>{Title}</p>
    </div>
  );
}
export default HeroTile;


