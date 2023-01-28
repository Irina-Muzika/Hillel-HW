
import styles from "./style.module.css";
import React from "react";

export default function Error({value}) {
  return value ? <span className={styles.error}>{value}</span> : null;
}