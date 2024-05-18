/* Author: Sotiris Konstantis */

import styles from "./type.module.css";

export default function Type({ type }) {
    return (
      <div className={styles.type}>
        {type}
      </div>
    );
  }