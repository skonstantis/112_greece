/* Author: Sotiris Konstantis */

import Item from "./Item";

import styles from "./list.module.css";

export default function List({ data }) {
  return (
    <div className={styles.list}>
      {data.map((alert) => (
        <Item alert={alert} />
      ))}
    </div>
  );
}
