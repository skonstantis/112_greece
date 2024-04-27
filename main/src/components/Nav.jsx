/* Author: Sotiris Konstantis */

import styles from "./nav.module.css";
import Logo from "./Logo";
import Clock from "./Clock";
import HeaderHeading from "./HeaderHeading";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <HeaderHeading />
      <Clock />
    </div>
  );
}
