import MiniTrend from './MiniTrend';
import styles from './Trend.module.css'
function Trend() {
  const op1 = 'dekhoo jaa ke';
  const op2 = 'in the last month';
  const op3 = 'off all time';

  const handleOnClick = () => {

  }
  return (
    <div className={styles.parentTrendDiv}>
      <div className={styles.trendTitleDiv}>
        <p className={styles.trendTitle}>Youtube Gyan<button>{op1}</button></p>
      </div>
      <div className={styles.trendsDivWrapper}>
        <MiniTrend id={1} Stats={'23K'} Title={'Top 5 Universities in Jaipur'} Link={'https://youtu.be/iHaREXRKt9o?si=-HrpHn18YM-K2baZ'} TrendImage={'https://i.ytimg.com/vi/iHaREXRKt9o/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDBsrnv9XiYH8oMw1umKt_FkTYe2g'} />
        <MiniTrend id={2} Stats={'19K'} Title={'JECRC University Hostels'} Link={'https://youtu.be/tl5kdIyqGc0?si=5hiz3Bn_3DtwmIlW'} TrendImage={'https://i.ytimg.com/vi/tl5kdIyqGc0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEdalLE9SNnLmvpjNPaifzb1_P4A'} />
        <MiniTrend id={3} Stats={'6.2K'} Title={'Hostel v/s Flats review | Hostel life at JECRC University'} Link={'https://youtu.be/i1B-DQFWRKU?si=rkwgz4InY1S5XuIR'} TrendImage={'https://i.ytimg.com/vi/i1B-DQFWRKU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAqHFqi_Qjyky1rA-JMAQEmHQNvnA'} />
        <MiniTrend id={4} Stats={'1.6K'} Title={'Top 10 Things to Buy Before College (Must Buy !!!)'} Link={'https://youtu.be/UCAcL9FM9s4?si=rX9ICvIJ01FH2t16k'} TrendImage={'https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA'} />
      </div>
    </div>
  );
}
export default Trend;