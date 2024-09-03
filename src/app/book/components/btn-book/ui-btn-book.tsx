"use client";

import {
  IconBold,
  IconCode,
  IconDivider,
  IconHead1,
  IconHead2,
  IconHead3,
  IconTextColor,
} from "@/shared/icons";
import React from "react";
import style from "./btn-book.module.css";

interface Props {
  isActiveH1: boolean;
  isActiveH2: boolean;
  isActiveH3: boolean;
  isActiveCode: boolean;
  onSelectHeading: (level: 1 | 2 | 3) => void;
  onSelectCode: () => void;
  isActiveDivider: boolean;
  onSelectDivider: () => void;
  isBold: boolean;
  onSelectBold: (value: boolean) => void;
  selectColor: string;
  onSelectColor: () => void;
}

export function UiBtnBook({
  isActiveH1,
  isActiveH2,
  isActiveH3,
  onSelectHeading,
  onSelectCode,
  isActiveCode,
  isActiveDivider,
  onSelectDivider,
  isBold,
  onSelectBold,
  onSelectColor,
  selectColor,
}: Props) {
  return (
    <div className={style["content-btn"]}>
      <button
        className={`${style["btn-book"]} ${isActiveH1 && style["active"]}`}
        onClick={() => {
          onSelectHeading(1);
        }}
      >
        <IconHead1 />
      </button>
      <button
        className={`${style["btn-book"]} ${isActiveH2 && style["active"]}`}
        onClick={() => {
          onSelectHeading(2);
        }}
      >
        <IconHead2 />
      </button>
      <button
        className={`${style["btn-book"]} ${isActiveH3 && style["active"]}`}
        onClick={() => {
          onSelectHeading(3);
        }}
      >
        <IconHead3 />
      </button>
      <button
        className={`${style["btn-book"]} ${isActiveCode && style["active"]}`}
        onClick={() => {
          onSelectCode();
        }}
      >
        <IconCode />
      </button>
      <button
        className={`${style["btn-book"]} ${isActiveDivider && style["active"]}`}
        onClick={() => {
          onSelectDivider();
        }}
      >
        <IconDivider />
      </button>
      <button
        className={`${style["btn-book"]} ${isBold && style["active"]}`}
        onClick={() => {
          onSelectBold(isBold);
        }}
      >
        <IconBold />
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
