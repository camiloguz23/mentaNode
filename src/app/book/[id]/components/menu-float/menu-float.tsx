"use client";

import React from "react";
import style from "./menu-float.module.css";
import { IconHead1, IconHead2, IconHead3, IconTextColor } from "@/shared";

interface Props {
  isActiveH1: boolean;
  isActiveH2: boolean;
  isActiveH3: boolean;
  onSelectHeading: (level: 1 | 2 | 3) => void;
  selectColor: string;
  onSelectColor: () => void;
}

export function MenuFloat({
  isActiveH1,
  isActiveH2,
  isActiveH3,
  onSelectColor,
  onSelectHeading,
  selectColor,
}: Props) {
  return (
    <div className={style.contentFloat}>
      <button
        className={`${style["btn-book"]}`}
        onClick={() => {
          onSelectHeading(1);
        }}
      >
        <IconHead1 />
      </button>
      <button
        className={`${style["btn-book"]}`}
        onClick={() => {
          onSelectHeading(2);
        }}
      >
        <IconHead2 />
      </button>
      <button
        className={`${style["btn-book"]}`}
        onClick={() => {
          onSelectHeading(3);
        }}
      >
        <IconHead3 />
      </button>
      <button
        style={{ color: selectColor }}
        className={`${style["btn-book"]} ${style.textcolor}`}
        onClick={() => {
          onSelectColor();
        }}
      >
        <IconTextColor />
      </button>
    </div>
  );
}
