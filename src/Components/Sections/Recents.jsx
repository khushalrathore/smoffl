import styles from './Recents.module.css'
import RecentItem from './RecentItem.jsx'
import { recentItem } from '../../Pages/0/PagesData.jsx';

function Recents() {

  return (
    <div className={styles.recentsDiv}>
      <div className={styles.recentsDivHeading}>
        <div>
          <span>Recently added</span>
          <p>Courses, Youtube Videos and more...</p>
        </div>
      </div>
      <div className={styles.recentsDivContent}>
        {recentItem.map((member) => (<RecentItem id={member.id} key={member.id} Stats={member.stats} Title={member.title} Link={member.Link} TrendImage={member.Img} />))}
      </div>
    </div>
  );
}
export default Recents;