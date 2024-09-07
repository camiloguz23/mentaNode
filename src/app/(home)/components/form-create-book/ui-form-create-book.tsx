"use client";

import { UiInput } from "@/shared";
import React from "react";
import style from "./form-create.module.css";

interface Props {
  onClose: () => void;
}

export function UiFormCreateBook({ onClose }: Props) {
  return (
    <form className={style.form}>
      <UiInput title="Name Book" name="nameBook" />
      <UiInput title="description Book" name="descriptionBook" />
      <div className={style.contentBtn}>
        <button onClick={onClose} type="button" className={style.btn_close}>
          Cerrar
        </button>
        <button onClick={onClose} type="button" className={style.btn_save}>
          create
        </button>
      </div>
    </form>
  );
}
