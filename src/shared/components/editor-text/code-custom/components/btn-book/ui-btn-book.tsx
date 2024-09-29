"use client";

import {
  IconBold,
  IconCode,
  IconDivider,
  IconTextColor,
  UiBtn,
  UiModalFixed,
} from "@/shared/icons";
import React from "react";
import style from "./btn-book.module.css";
import { UiBtnTitle, UiSelectTable } from "./components";

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
  onActionTable: (action: "create" | "row" | "column") => void;
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
  onActionTable,
}: Props) {
  return (
    <UiModalFixed className={style["content-btn"]}>
      <UiBtnTitle
        onTitle={onSelectHeading}
        activeHeadOne={isActiveH1}
        activeHeadTwo={isActiveH2}
        activeHeadThree={isActiveH3}
      />
      <UiSelectTable onCreateTable={(value) => onActionTable(value)} />
      <UiBtn
        className={`${isActiveCode && style["active"]}`}
        onClick={() => {
          onSelectCode();
        }}
        title=""
        iconEnd={<IconCode />}
      />
      <UiBtn
        title={""}
        iconEnd={<IconDivider />}
        className={`${isActiveDivider && style["active"]}`}
        onClick={() => onSelectDivider()}
      />
      <UiBtn
        title={""}
        iconEnd={<IconBold />}
        className={`${isBold && style["active"]}`}
        onClick={() => onSelectBold(isBold)}
      />
      <UiBtn
        style={{ color: selectColor }}
        title={""}
        iconEnd={<IconTextColor />}
        className={style.textcolor}
        onClick={() => onSelectColor()}
      />
    </UiModalFixed>
  );
}
