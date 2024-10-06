import { getImageUrl } from "../../utils";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="email-icon"
          ></img>
          <a href="mailto:k.shameer2235@gmail.com" target="_blank">
            k.shameer2235@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin-icon"
          ></img>
          <a
            href="https://www.linkedin.com/in/shameer-k-90457b186/"
            target="_blank"
          >
            Shameer K
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="github-icon"
          ></img>
          <a href="https://github.com/Shameer2210" target="_blank">
            Shameer2210
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="phone-icon"></img>
          <a href="tel:9944235594" target="_blank">
            +91 9944235594
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
