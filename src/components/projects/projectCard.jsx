import { getImageUrl } from "../../utils.js";
import styles from "./projectCard.module.css";
const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, demo },
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} className={styles.image}></img>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
        <div className={styles.links}>
          {/* <a className={styles.link} href={demo}>
            Demo
          </a> */}
          <a className={styles.link} href={source}>
            source-code
          </a>
        </div>
      </ul>
    </div>
  );
};

export default ProjectCard;
