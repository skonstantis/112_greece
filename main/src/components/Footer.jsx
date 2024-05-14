/* Author: Sotiris Konstantis */

import styles from "./footer.module.css";

import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div className={styles.footer}>
        <Copyright/>
    </div>
  );
}
