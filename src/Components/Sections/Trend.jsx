import MiniTrend from './MiniTrend';
import styles from './Trend.module.css'
function Trend() {
  const op1 = 'in the last two weeks';
  const op2 = 'in the last month';
  const op3 = 'off all time';

  const handleOnClick = () => {

  }
  return (
    <div className={styles.parentTrendDiv}>
      <div className={styles.trendTitleDiv}>
        <p className={styles.trendTitle}>Trending<button>{op1}</button></p>
      </div>
      <div className={styles.trendsDivWrapper}>
        <MiniTrend id={1} Stats={'12000'} Title={'A Random Title of Something'} Link={'https://www.youtube.com/@shinemoonk'} TrendImage={'https://i.pinimg.com/originals/5b/62/48/5b62482ee9032dbfeb447cf811bd644c.gif'} />
        <MiniTrend id={2} Stats={'1200'} Title={'Another Title of Something Relevant'} Link={'https://www.youtube.com/@shinemoonk'} TrendImage={'https://media0.giphy.com/media/GiXBNzilzkHH1GY7Vc/giphy.gif?cid=6c09b952minbwsaelel6mb2bscidysfkk42v3o4pis06ufei&ep=v1_gifs_search&rid=giphy.gif&ct=g'} />
        <MiniTrend id={3} Stats={'120'} Title={'A Random Title of Something'} Link={'https://www.youtube.com/@shinemoonk'} TrendImage={'https://i.pinimg.com/originals/8a/54/f2/8a54f29e53eb0e3826a822ffec23a602.gif'} />
        <MiniTrend id={4} Stats={'12'} Title={'Another Title of Something Relevant'} Link={'https://www.youtube.com/@shinemoonk'} TrendImage={'https://i.gifer.com/embedded/download/77Q8.gif'} />
      </div>
    </div>
  );
}
export default Trend;