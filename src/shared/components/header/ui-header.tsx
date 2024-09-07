import React from "react";
import styles from "./header.module.css";
import { BtnGoogle } from "../btn-google";
import { IconBookMain } from "@/shared/icons";

export function UiHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.contentTitle}>
        <IconBookMain />
        <h1>Book Note </h1>
      </div>
      <BtnGoogle />
    </header>
  );
}
