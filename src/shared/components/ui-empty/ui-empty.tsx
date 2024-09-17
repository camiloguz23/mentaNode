import { IconEmpty } from "@/shared/icons";
import React from "react";
import style from "./empty.module.css";

interface Props {
  message: string;
}

export function UiEmpty({ message }: Props) {
  return (
    <div className={style.empty}>
      <IconEmpty />
      <p className={style.message}>{message}</p>
    </div>
  );
}
