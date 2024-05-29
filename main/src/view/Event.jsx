/* Author: Sotiris Konstantis */

import styles from "./event.module.css";

export default function Event({ event }) {
    return (
      <div className={styles.event}>
        {event}
      </div>
    );
  }