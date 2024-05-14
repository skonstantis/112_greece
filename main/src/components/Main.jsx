/* Author: Sotiris Konstantis */

import { useState } from "react";

import styles from "./main.module.css";

import List from "./List";

import dataArray from "../data/data.js";

export default function Main() {
  const [data, setData] = useState(dataArray);
  const [dataId, setDataId] = useState(0);

  return (
    <div className={styles.main}>
      <List data={data} />
    </div>
  );
}
