"use client";

import { IconBook } from "@/shared";
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
    <div className={style.book} onClick={() => route.push(`/book/${id}`)}>
      <IconBook width="140px" height="180px" />
      <div className={style.content_info_book}>
        <h4>{nameBook}</h4>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}
