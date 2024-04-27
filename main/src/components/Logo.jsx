/* Author: Sotiris Konstantis */

import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.navHeader}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={"https://i.ibb.co/gt7RryC/Group-79.png"}
          alt=""
        ></img>
      </div>
    </div>
  );
}
