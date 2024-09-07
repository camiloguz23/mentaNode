import React from "react";
import styles from "./input.module.css";

interface Props {
  name: string;
  title: string;
}

export function UiInput({ name, title }: Props) {
  return (
    <label htmlFor={name} className={styles.label}>
      <span className={styles.title}>{title}</span>
      <input
        type="text"
        name={name}
        id={name}
        placeholder="Title"
        className={styles.input}
      />
    </label>
  );
}
