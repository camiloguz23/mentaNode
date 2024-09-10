"use client";

import { UiInput, useBookStore } from "@/shared";
import React from "react";
import style from "./form-create.module.css";

interface Props {
  onClose: () => void;
}

export function UiFormCreateBook({ onClose }: Props) {
  const { createBook } = useBookStore((store) => store);
  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        const valuesForm = new FormData(e.target as HTMLFormElement);
        const values: { nameBook: string; descriptionBook: string } =
          Object.fromEntries(valuesForm) as {
            nameBook: string;
            descriptionBook: string;
          };

        createBook({
          description: values.descriptionBook,
          title: values.nameBook,
          id: crypto.randomUUID(),
        });
      }}
    >
      <UiInput title="Name Book" name="nameBook" />
      <UiInput title="description Book" name="descriptionBook" />
      <div className={style.contentBtn}>
        <button onClick={onClose} type="button" className={style.btn_close}>
          Cerrar
        </button>
        <button type="submit" className={style.btn_save}>
          create
        </button>
      </div>
    </form>
  );
}
