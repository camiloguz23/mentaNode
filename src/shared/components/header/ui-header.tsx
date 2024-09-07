import React from "react";
import styles from "./header.module.css";
import { BtnGoogle } from "../btn-google";

export function UiHeader() {
  return (
    <header className={styles.header}>
      <h1>Book Note </h1>
      <BtnGoogle />
    </header>
  );
}
