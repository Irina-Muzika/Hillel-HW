import {ErrorMessage} from "formik";
import styles from "./style.module.css";
import React from "react";

export default function Error({ value }) {
  return <ErrorMessage name={value} className={styles.error} component='span' />;
}