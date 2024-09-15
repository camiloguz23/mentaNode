"use client";

import { IconArrowRight, IconBook } from "@/shared";
import React from "react";
import style from "./book.module.css";
import { useRouter } from "next/navigation";

interface Props {
  nameBook: string;
  description?: string;
  id: string;
}

export default function UiBook({ nameBook, description, id }: Props) {
  const route = useRouter();
  return (
    <div className={style.book}>
      <div className={style.card_header}>
        <h4 className={style.title_card}>{nameBook}</h4>
      </div>
      <div className={style.content_info_book}>
        <p className={style.description}>{description}</p>
        <button
          className={style.btn_open}
          onClick={() => route.push(`/book/${id}`)}
        >
          abrir <IconArrowRight className={style.icon} />
        </button>
      </div>
    </div>
  );
}
