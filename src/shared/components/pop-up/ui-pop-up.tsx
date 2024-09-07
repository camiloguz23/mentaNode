import React from "react";
import styles from "./pop-up.module.css";

interface Props {
  children: React.ReactNode;
}

export function UiPopUp({ children }: Props) {
  return <div className={styles["pop-up"]}>{children}</div>;
}
