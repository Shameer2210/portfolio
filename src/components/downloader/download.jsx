import styles from "./download.module.css";
import { useState } from "react";

const Download = () => {
  const [text, setText] = useState("My Resume");

  const handleClick = () => {
    setText("Downloading");

    setTimeout(() => {
      setText("My Resume"); // Reset text
    }, 4000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <a
          href="https://drive.google.com/uc?export=download&id=1GWcO7wyiXJ2Z1BCl3lQaoOxcNFnASkRg"
          className={styles.link}
          download="Shameer_K.pdf"
          target="_blank"
        >
          <button className={styles.button} onClick={handleClick}>
            {text}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Download;
