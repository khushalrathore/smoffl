import lead from '../../assets/lead.png';
import manager from '../../assets/manager.png';
import editor from '../../assets/editor.png';
import icon1 from '../../assets/course1.png';
import icon2 from '../../assets/lead.png';
import course_1 from '../../assets/course1.png'
import insta_post from '../../assets/insta_post.png'
import insta_post2 from '../../assets/insta_post2.png'

export const teamInfo = [
  {
    id: '🤩',
    name: `ShineMoon`,
    role: `Himanshu Kumawat`,
    img: lead,
    link: 'https://www.instagram.com/ig_shinemoon',
    desc: `A content creator with 3 years of experience. Fast video editor, skilled in Premiere Pro & After Effects.
Using these skills, been successfully able to wrap-up editing a video of JECRC'S biggest 3 day continuous fest, which was then showcased on the 3rd day itself to the live audience. 80% of clients are satisfied and happy with the work`
  },
  {
    id: '🧑‍💼',
    name: `Vikash Takhar`,
    role: `Manager`,
    img: manager,
    desc: `A proficient social media manager and meta-ads expert, specializing in Instagram, YouTube and
Facebook. With a strategic approach and a knack for analytics, driving brand visibility and engagement,
delivering impressive results with two years of experience leveraging tried-and-tested algorithms to
optimize engagement and brand growth.`,
    link: 'https://www.instagram.com/vikashh_choudharyy',

  },
  {
    id: '🤧',
    name: `Mridul Gupta`,
    role: `Editor`,
    img: editor,
    desc: `Proficient in Adobe Premiere Pro and After Effects, using them to bring ideas to life and craft visually stunning narratives. 
      Whether it's a short film, promotional video, or social media content, approaching each project with creativity and dedication.`,
    link: 'https://www.instagram.com/itss.mridul',

  },
  {
    id: '🕷️',
    name: `Khushal Rathore`,
    role: `Designer`,
    img: `https://avatars.githubusercontent.com/u/118611135?v=4`,
    desc: `Your Friendly Neighbourhood Web Developer !!!`,
    link: 'https://www.instagram.com/khushalrathore_',
  }
];

export const coursesInfo = [
  {
    id: 1,
    title: 'Simplest Way To Learn',
    icon: icon1,
    time: '<1hr',
    desc: `Ye course pakka se video editor bana dega jada socho mat lelo or kuch sikh lo, kuki syd ye paise vase bhi cigrattee me udaa doge isse acha kuch use lelo. Padhayi to kr li jitni krni thi apni skill pe focus kr ke aage baddo or professional ban jaooooooooo`

  },
  {
    id: 2,
    title: 'Demo Course 2',
    icon: icon2,
    time: '<2hr',
    desc: `Ye course pakka se video editor bana dega jada socho mat lelo or kuch sikh lo, kuki syd ye paise vase bhi cigrattee me udaa doge isse acha kuch use lelo. Padhayi to kr li jitni krni thi apni skill pe focus kr ke aage baddo or professional ban jaooooooooo`
  }
];

export const heroItem = [
  {
    id: 1,
    Accent: 'steelblue',
    Title: 'Simplest Way To Learn',
    Desc: `Ye course pakka se video editor bana dega jada socho mat lelo or kuch sikh lo, kuki syd ye paise vase bhi cigrattee me udaa doge isse acha kuch use lelo.
Padhayi to kr li jitni krni thi apni skill pe focus kr ke aage baddo or professional ban jaooooooooo`,
    Img: course_1,
    Link: '/courses',
    BtnText: 'Check Now',
  }
];

export const recentItem = [
  {
    id: '1',
    stats: '12',
    title: heroItem[0].Title,
    Link: heroItem[0].Link,
    Img: heroItem[0].Img
  },
  {
    id: '2',
    stats: '1.5K',
    title: 'Hostel Essentials | College Shopping',
    Link: 'https://youtu.be/Pn6KZoiUSYk?si=O9fode4XS-YJt7O7',
    Img: 'https://i.ytimg.com/vi/Pn6KZoiUSYk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAXTDG2kXEDKxh7qHFrm6rnYUTdEQ'
  },
  {
    id: '3',
    stats: '437',
    title: 'New Store Alert | RESTATE VINTAGE',
    Link: 'https://www.instagram.com/reel/C764HeYBc4E/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    Img: insta_post
  },
  {
    id: '4',
    stats: '92',
    title: 'Do Not Touch The Glass !!!',
    Link: 'https://www.instagram.com/reel/C5inJnhBuAZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    Img: insta_post2
  },
];

export const ytVideoInfo = [
  {
    id: 1,
    Stats: '23K',
    Title: 'Top 5 Universities in Jaipur',
    Link: 'https://youtu.be/iHaREXRKt9o?si=-HrpHn18YM-K2baZ',
    TrendImage: 'https://i.ytimg.com/vi/iHaREXRKt9o/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDBsrnv9XiYH8oMw1umKt_FkTYe2g'
  },
  {
    id: 2,
    Stats: '19K',
    Title: 'JECRC University Hostels',
    Link: 'https://youtu.be/tl5kdIyqGc0?si=5hiz3Bn_3DtwmIlW',
    TrendImage: 'https://i.ytimg.com/vi/tl5kdIyqGc0/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEdalLE9SNnLmvpjNPaifzb1_P4A'
  },
  {
    id: 3,
    Stats: '6.2K',
    Title: 'Hostel v/s Flats review | Hostel life at JECRC University',
    Link: 'https://youtu.be/i1B-DQFWRKU?si=rkwgz4InY1S5XuIR',
    TrendImage: 'https://i.ytimg.com/vi/i1B-DQFWRKU/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAqHFqi_Qjyky1rA-JMAQEmHQNvnA'
  },
  {
    id: 4,
    Stats: '1.6K',
    Title: 'Top 10 Things to Buy Before College (Must Buy !!!)',
    Link: 'https://youtu.be/UCAcL9FM9s4?si=rX9ICvIJ01FH2t16k',
    TrendImage: 'https://i.ytimg.com/vi/UCAcL9FM9s4/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUOU51bEBQcgNI7Ye0sLZNS3tWsA'
  },

]




