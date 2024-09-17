import React from "react";
import styles from "./header.module.css";
import { BtnGoogle } from "../btn-google";
import { IconPen } from "@/shared/icons";
import UiLink from "../link/ui-link";

export function UiHeader() {
  return (
    <header className={styles.header}>
      <UiLink path="/">
        <div className={styles.contentTitle}>
          <IconPen />
          <h1 className={styles.name}>mentaNote</h1>
        </div>
      </UiLink>
      <BtnGoogle />
    </header>
  );
}
