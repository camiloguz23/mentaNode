"use client";

import {
  IconAddColumn,
  IconAddRow,
  IconAddTable,
  IconDown,
  IconUp,
  UiBtn,
  useBoolean,
} from "@/shared";
import React from "react";
import style from "./table.module.css";

interface Props {
  onCreateTable: (action: "create" | "row" | "column") => void;
}

export function UiSelectTable({ onCreateTable }: Props) {
  const openModal = useBoolean();
  return (
    <div className={style.containerBtn}>
      <UiBtn
        onClick={openModal.toggle}
        title={`Tabla`}
        iconEnd={openModal.value ? <IconUp /> : <IconDown />}
      />
      {openModal.value && (
        <div className={style.content_item}>
          <span className={style.item} onClick={() => onCreateTable("create")}>
            Crear <IconAddTable className={style.icon} />
          </span>
          <span className={style.item} onClick={() => onCreateTable("row")}>
            Crear Row <IconAddRow className={style.icon} />
          </span>
          <span className={style.item} onClick={() => onCreateTable("column")}>
            Crear Columna <IconAddColumn className={style.icon} />
          </span>
        </div>
      )}
    </div>
  );
}
