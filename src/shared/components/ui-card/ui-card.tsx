import React from "react";
import style from "./card.module.css";

interface Props {
  children: React.ReactNode;
}

export function UiCard({ children }: Props) {
  return <div className={style.card}>{children}</div>;
}
