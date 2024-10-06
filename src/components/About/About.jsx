import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/About-image.png")}
          alt="Me-sitting with Laptop"
          className={styles.aboutimage}
        ></img>

        <ul className={styles.aboutitems}>
          <li className={styles.eachitem}>
            <img
              src={getImageUrl("about/frontend.png")}
              className={styles.eachImage}
            ></img>
            <div className={styles.abouttexts}>
              <h3>Frontend Developer</h3>
              <p className={styles.paratext}>
                Specializing in designing responsive, high-performance websites
                that offer seamless user experiences.
              </p>
            </div>
          </li>
          <li className={styles.eachitem}>
            <img
              src={getImageUrl("about/python.png")}
              className={styles.eachImage}
            ></img>
            <div className={styles.abouttexts}>
              <h3>Python Programmer</h3>
              <p className={styles.paratext}>
                Expert in writing clean, efficient Python code to develop
                scalable solutions and automate tasks effectively.
              </p>
            </div>
          </li>
          <li className={styles.eachitem}>
            <img
              src={getImageUrl("about/design.png")}
              className={styles.eachImage}
            ></img>
            <div className={styles.abouttexts}>
              <h3>Designer</h3>
              <p className={styles.paratext}>
                Skilled in creating visually compelling designs and multimedia
                content that enhance user engagement across platforms.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
