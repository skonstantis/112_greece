/* Author: Sotiris Konstantis */

import styles from "./item.module.css";

export default function Item({ alert }) {
  return (
    <div className={styles.itemContainer}>
      {alert.name}
    </div>
  );
}