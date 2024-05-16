/* Author: Sotiris Konstantis */

import styles from "./item.module.css";

function getDate(date) {
  return date
    .toLocaleDateString("en-Gb", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    })
    .replace(",", " ");
}

export default function Item({ alert }) {
  return (
    <div className={styles.itemContainer}>
      {getDate(alert.date) + " "}
      {alert.categories.map((category) => category + " ")}
      {alert.types.map((type) => type + " ")}
      {alert.prefectures.map((prefecture) => prefecture + " ")}
      {alert.text}
    </div>
  );
}
