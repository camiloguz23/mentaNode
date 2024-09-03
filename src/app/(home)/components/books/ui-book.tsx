import { IconBook } from "@/shared";
import React from "react";
import style from "./book.module.css";

interface Props {
  nameBook: string;
}

export default function UiBook({ nameBook }: Props) {
  return (
    <div className={style.book}>
      <IconBook /> {nameBook}
    </div>
  );
}
