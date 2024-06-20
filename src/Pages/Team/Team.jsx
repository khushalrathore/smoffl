import styles from './Team.module.css'
import '../../../globals.css';
import TeamMember from './TeamMember';
import lead from '../../assets/lead.png';
import manager from '../../assets/manager.png';
import editor from '../../assets/editor.png';
function Team() {
  const teamInfo = {
    first: {
      id: 1,
      name: `Himanshu Kumawat`,
      role: `Himanshu Kumawat`,
      img: lead,
      desc: `A content creator with 3 years of experience. Fast video editor, skilled in Premiere Pro & After Effects.
Using these skills, been successfully able to wrap-up editing a video of JECRC'S biggest 3 day continuous fest, which was then showcased on the 3rd day itself to the live audience. 80% of clients are satisfied and happy with the work`
    },
    second: {
      id: 2,
      name: `Vikash Takhar`,
      role: `Manager`,
      img: manager,
      desc: `A proficient social media manager and meta-ads expert, specializing in Instagram, YouTube and
Facebook. With a strategic approach and a knack for analytics, driving brand visibility and engagement,
delivering impressive results with two years of experience leveraging tried-and-tested algorithms to
optimize engagement and brand growth.`
    },
    third: {
      id: 3,
      name: `Mridul Gupta`,
      role: `Editor`,
      img: editor,
      desc: `Proficient in Adobe Premiere Pro and After Effects, using them to bring ideas to life and craft visually stunning narratives. 
      Whether it's a short film, promotional video, or social media content, approaching each project with creativity and dedication.`
    },
    fourth: {
      id: 4,
      name: `Khushal Rathore`,
      role: `Designer`,
      img: `https://avatars.githubusercontent.com/u/118611135?v=4`,
      desc: `Your Friendly Neighbourhood Web Developer !!!`
    }

  }

  return (
    <div className="pageDiv">
      <div className="pageTitle">Team Members</div>
      <div className={styles.teamMembersWrapper}>
        <TeamMember name={teamInfo.first.name} role={teamInfo.first.role} img={teamInfo.first.img} desc={teamInfo.first.desc} id={teamInfo.first.id} direction={'row'} />
        <TeamMember name={teamInfo.second.name} role={teamInfo.second.role} img={teamInfo.second.img} desc={teamInfo.second.desc} id={teamInfo.second.id} direction={'row-reverse'} />
        <TeamMember name={teamInfo.third.name} role={teamInfo.third.role} img={teamInfo.third.img} desc={teamInfo.third.desc} id={teamInfo.third.id} direction={'row'} />
        <TeamMember name={teamInfo.fourth.name} role={teamInfo.fourth.role} img={teamInfo.fourth.img} desc={teamInfo.fourth.desc} id={teamInfo.fourth.id} direction={'row-reverse'} />
      </div>
    </div>

  );
}
export default Team;