import styles from './Recents.module.css'
import RecentItem from './RecentItem.jsx'
import { heroItem } from './Hero.jsx';
import insta_post from '../../assets/insta_post.png'
import insta_post2 from '../../assets/insta_post2.png'
function Recents() {
  const recentItem = {
    second: {
      stats: '1.5K',
      title: 'Hostel Essentials | College Shopping',
      Link: 'https://youtu.be/Pn6KZoiUSYk?si=O9fode4XS-YJt7O7',
      Img: 'https://i.ytimg.com/vi/Pn6KZoiUSYk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAXTDG2kXEDKxh7qHFrm6rnYUTdEQ'
    }, third: {
      id: '2',
      stats: '437',
      title: 'New Store Alert | RESTATE VINTAGE',
      Link: 'https://www.instagram.com/reel/C764HeYBc4E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      Img: insta_post
    },
    first: {
      id: '3',
      stats: '12',
      title: heroItem.first.Title,
      Link: heroItem.first.Link,
      Img: heroItem.first.Img
    },
    fourth: {
      id: '4',
      stats: '92',
      title: 'Do Not Touch The Glass !!!',
      Link: 'https://www.instagram.com/reel/C5inJnhBuAZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      Img: insta_post2
    },
  }
  return (
    <div className={styles.recentsDiv}>
      <div className={styles.recentsDivHeading}>
        <div>
          <span>Recently added</span>
          <p>Courses, Youtube Videos and more...</p>
        </div>
      </div>
      <div className={styles.recentsDivContent}>
        <RecentItem id={recentItem.first.id} Stats={recentItem.first.stats} Title={recentItem.first.title} Link={recentItem.first.Link} TrendImage={recentItem.first.Img} />
        <RecentItem id={recentItem.second.id} Stats={recentItem.second.stats} Title={recentItem.second.title} Link={recentItem.second.Link} TrendImage={recentItem.second.Img} />
        <RecentItem id={recentItem.third.id} Stats={recentItem.third.stats} Title={recentItem.third.title} Link={recentItem.third.Link} TrendImage={recentItem.third.Img} />
        <RecentItem id={recentItem.fourth.id} Stats={recentItem.fourth.stats} Title={recentItem.fourth.title} Link={recentItem.fourth.Link} TrendImage={recentItem.fourth.Img} />
      </div>
    </div>
  );
}
export default Recents;