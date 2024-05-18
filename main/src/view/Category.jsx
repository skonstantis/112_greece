/* Author: Sotiris Konstantis */

import styles from "./category.module.css";

export default function Cateory({ category }) {
    return (
      <div className={styles.category}>
        {category}
      </div>
    );
  }