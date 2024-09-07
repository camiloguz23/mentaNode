"use client";

import React from "react";
import style from "./home.module.css";
import UiBook from "../components/books/ui-book";
import { UiPopUp, useBoolean } from "@/shared";
import { UiFormCreateBook } from "../components";

export function UiHome() {
  const openFormCreateBook = useBoolean();
  return (
    <section className={style.home}>
      <div className={style.sectionCreate}>
        <button className={style.btnCreate} onClick={openFormCreateBook.onTrue}>
          Crear Libreta
        </button>
      </div>
      <div className={style.contentBooks}>
        <UiBook nameBook="Book 1" />
      </div>
      {openFormCreateBook.value && (
        <UiPopUp>
          <UiFormCreateBook onClose={openFormCreateBook.onFalse} />
        </UiPopUp>
      )}
    </section>
  );
}
