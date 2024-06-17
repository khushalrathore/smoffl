import styles from './Recents.module.css'
import RecentItem from './RecentItem.jsx'
function Recents() {
  const recentItem = {
    first: {
      id: '1',
      stats: '12000',
      title: 'A Random Title of Something',
      Link: 'https://www.youtube.com/@shinemoonk',
      Img: 'https://i.pinimg.com/originals/5b/62/48/5b62482ee9032dbfeb447cf811bd644c.gif'
    }, second: {
      id: '2',
      stats: '1200',
      title: 'Another Title of Something Relevant',
      Link: 'https://www.youtube.com/@shinemoonk',
      Img: 'https://media0.giphy.com/media/GiXBNzilzkHH1GY7Vc/giphy.gif?cid=6c09b952minbwsaelel6mb2bscidysfkk42v3o4pis06ufei&ep=v1_gifs_search&rid=giphy.gif&ct=g'
    },
    third: {
      id: '3',
      stats: '120',
      title: 'A Random Title of Something',
      Link: 'https://www.youtube.com/@shinemoonk',
      Img: 'https://i.pinimg.com/originals/8a/54/f2/8a54f29e53eb0e3826a822ffec23a602.gif'
    },
    fourth: {
      id: '4',
      stats: '12',
      title: 'Another Title of Something Relevant',
      Link: 'https://www.youtube.com/@shinemoonk',
      Img: 'https://i.gifer.com/embedded/download/77Q8.gif'
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