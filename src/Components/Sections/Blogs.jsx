import React, { useState } from 'react';
import styles from './Blogs.module.css';

function Blogs({ blogDate }) {
  const blogInfo = {
    first: {
      pfp: 'https://yt3.googleusercontent.com/3gSdkQZN9zbBJQBAuq8zJ1AST5YVTveIFzjkYUUmEkvmKlumAjgI8kWzO58Uiwn0C9Ph_e3cXKE=s176-c-k-c0x00ffffff-no-rj',
      name: 'Himanshu Kumawat',
      title: 'Learning the same sh*t twice',
      desc: 'Revisiting footage can be tedious but essential in video editing. Each review uncovers new details, ensuring refined cuts and enhanced storytelling, ultimately perfecting the final production.',
      cover: 'https://c.tadst.com/gfx/600x337/earthshine.jpg?1',
    },
  }
  const days = new Date().getDate() - blogDate;
  const shares = 0;
  const [Views, setViews] = useState(0);
  const handleViews = () => {
    setViews(v => v + 1);
  }

  const tags = [
    '#VideoEditing', '#EditingTips', '#FilmMaking', '#VideoProduction', '#PostProduction',
    '#CreativeEditing', '#VideoReview', '#PerfectingTheCut',
    '#EditingEssentials'
  ];

  return (
    <div className={styles.blogsDiv}>
      <div className={styles.blogsDivHeading}>
        <div>
          <span>Blogs</span>
          <p>Unveiling the Art of Video Editing and Creative Expression</p>
        </div>
      </div>
      <div className={styles.blogsDivContent}>
        <div className={styles.blogsDivContentbg} style={{ background: `url(${blogInfo.first.cover}) no-repeat center center`, backgroundSize: '100%' }}></div>
        <div className={styles.blogsDivContent1}>
          <div className={styles.blogsData}>
            <div className={styles.blogsPublishInfo}>
              <p> Published&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<span>{days}d ago</span> </p>
            </div>
            <div className={styles.blogsUserInfo}>
              <div className={styles.blogsUserPfp} style={{ background: `url(${blogInfo.first.pfp}) no-repeat center center` }}></div>
              <p>{blogInfo.first.name}</p>
            </div>
            <p className={styles.blogTitle}>{blogInfo.first.title}</p>
            <p className={styles.blogDesc}>{blogInfo.first.desc}..</p>
          </div>
          <div className={styles.blogCover} style={{ background: `url(${blogInfo.first.cover}) no-repeat center center` }}></div>
          <div className={styles.blogStats}>
            <div className={styles.tags}>
              <span>Tags</span>
              <div className={styles.tagsContainer}>
                {tags.map((tag, index) => (
                  <div key={index} className={styles.tag}>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div>
                <span>{Views} Views&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<span>{shares} Shares</span></span>
              </div>
              <div onClick={handleViews} className={styles.readMore}>Read More</div>
            </div>
          </div>
        </div>
        <div className={styles.hasButtons}>
          <div><span className={styles.arrow1}></span></div>
          <div><span className={styles.arrow2}></span></div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
