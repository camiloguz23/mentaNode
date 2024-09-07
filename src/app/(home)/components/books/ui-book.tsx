import { IconBook } from "@/shared";
import React from "react";
import style from "./book.module.css";

interface Props {
  nameBook: string;
}

export default function UiBook({ nameBook }: Props) {
  return (
    <div className={style.book}>
      <IconBook width="140px" height="180px" />
      <div className={style.content_info_book}>
        <h4>{nameBook}</h4>
        <p className={style.description}>Description..</p>
      </div>
    </div>
  );
}
