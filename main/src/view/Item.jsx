/* Author: Sotiris Konstantis */

import styles from "./item.module.css";
import Prefecture from "./Prefecture.jsx";
import Event from "./Event.jsx";
import Category from "./Category.jsx";
import Type from "./Type.jsx";

function getDate(date) {
  return date
    .toLocaleDateString("en-Gb", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(",", " ");
}

export default function Item({ alert }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.dateContainer}>
          <p>{getDate(alert.date)}</p>
        </div>
        <div className={styles.typeContainer}>
          {alert.types.map((type) => (
            <Type key={type} type={type} />
          ))}
        </div>
        <div className={styles.categoriesContainer}>
          {alert.categories.map((category) => (
            <Category key={category} category={category} />
          ))}
        </div>  
        <div className={styles.prefecturesContainer}>
          {alert.prefectures.map((prefecture) => (
            <Prefecture key={prefecture} prefecture={prefecture} />
          ))}
        </div>    
        <div className={styles.eventContainer}>
          {alert.events.map((event) => (
            <Event key={event == null ? "Κανένα" : event} event={event} />
          ))}
        </div>   
      </div>
    </div>
  );
}
