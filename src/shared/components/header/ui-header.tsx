import React from "react";
import styles from "./header.module.css";
import { BtnGoogle } from "../btn-google";
import { IconPen } from "@/shared/icons";

export function UiHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.contentTitle}>
        <IconPen />
        <h1 className={styles.name}>mentaNote</h1>
      </div>
      <BtnGoogle />
    </header>
  );
}
