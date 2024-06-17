import React, { useState } from 'react';
import styles from './Blogs.module.css';

function Blogs({ userName, blogDate, blogTitle, blogDesc, userPfp, blogCover }) {
  // const blurBg = document.querySelector('.blogsDivContent::after');
  // blurBg.style.background = `url(${blogCover})no-repeat center center`;
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
        <div className={styles.blogsDivContent1}>
          <div className={styles.blogsData}>
            <div className={styles.blogsPublishInfo}>
              <p> Published&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<span>{days}d ago</span> </p>
            </div>
            <div className={styles.blogsUserInfo}>
              <div className={styles.blogsUserPfp} style={{ background: `url(${userPfp}) no-repeat center center` }}></div>
              <p>{userName}</p>
            </div>
            <p className={styles.blogTitle}>{blogTitle}</p>
            <p className={styles.blogDesc}>{blogDesc}..</p>
          </div>
          <div className={styles.blogCover} style={{ background: `url(${blogCover}) no-repeat center center` }}></div>
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
