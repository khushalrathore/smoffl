import MiniTrend from './MiniTrend';
import styles from './Trend.module.css'
import { ytVideoInfo } from '../../Pages/0/PagesData';

function Trend() {
  return (
    <div className={styles.parentTrendDiv}>
      <div className={styles.trendTitleDiv}>
        <p className={styles.trendTitle}>Youtube Gyan<button>dekhoo jaa ke</button></p>
      </div>
      <div className={styles.trendsDivWrapper}>

        {ytVideoInfo.map((member) => <MiniTrend key={member.id} id={member.id} Stats={member.Stats} Title={member.Title} Link={member.Link} TrendImage={member.TrendImage} />)}

      </div>
    </div>
  );
}
export default Trend;