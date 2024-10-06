import styles from "./download.module.css";

const Download = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <a
          href="https://drive.google.com/uc?export=download&id=1GWcO7wyiXJ2Z1BCl3lQaoOxcNFnASkRg"
          className={styles.link}
          download="Shameer_K.pdf"
          target="_blank"
        >
          <button className={styles.button}>My Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Download;
