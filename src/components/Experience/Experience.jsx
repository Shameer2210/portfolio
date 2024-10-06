import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils.js";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & TECH STACK</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.ImageSrc)}
                    alt={skill.title}
                  ></img>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((details, id) => {
            return (
              <li key={id} className={styles.historyItems}>
                <img
                  src={getImageUrl(details.imageSrc)}
                  alt={details.organization}
                ></img>
                <div className={styles.historyItemDetails}>
                  <h3>{`${details.role}, ${details.organization}`}</h3>
                  <p>{`${details.period}`}</p>
                  <ul className={styles.expContent}>
                    {details.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
