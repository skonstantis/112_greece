/* Author: Sotiris Konstantis */

import styles from "./clock.module.css";
import { useState } from "react";
import { useEffect } from "react";

function getTime(time) {
  let date = new Date(time);
  return date
    .toLocaleDateString("en-Gb", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(",", " ");
}

export default function Clock() {
  const [time, setTime] = useState(getTime(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime(Date.now())), 1000);
    return () => clearInterval(interval);
}, [time]);

  return <div className={styles.clock}> {time} </div>;
}