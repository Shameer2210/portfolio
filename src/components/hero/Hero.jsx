import { getImageUrl } from "../../utils";
import Download from "../downloader/download";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Shameer</h1>
        <p className={styles.description}>Aspiring Web & Python Developer</p>
        <div className={styles.buttons}>
          <a
            href="mailto:k.shameer2235@gmail.com"
            className={styles.contactBtn}
          >
            Contact me
          </a>
          <div className={styles.download}>
            <Download />
          </div>
        </div>
      </div>

      <img
        src={getImageUrl("about/hero-image.png")}
        className={styles.heroimage}
        alt="Shameer k"
      ></img>
      <div className={styles.topBlur}> </div>
      <div className={styles.bottomBlur}> </div>
    </section>
  );
};

export default Hero;
