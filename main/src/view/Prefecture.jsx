/* Author: Sotiris Konstantis */

import styles from "./prefecture.module.css";

export default function Prefecture({ prefecture }) {
    return (
      <div className={styles.prefecture}>
        {prefecture}
      </div>
    );
  }