"use client";

import { IconDocument } from "@/shared";
import style from "./title-section.module.css";
import React from "react";

interface Props {
  title: string;
  idBooK: string;
  idSection: string;
}

export function UiTitleSection({ idBooK, title, idSection }: Props) {
  return (
    <div className={style.title_content}>
      <IconDocument />
      <span>{title}</span>
    </div>
  );
}
