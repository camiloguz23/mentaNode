"use client";

import React from "react";
import style from "./home.module.css";
import UiBook from "../components/books/ui-book";
import { UiPopUp, useBookStore, useBoolean } from "@/shared";
import { UiFormCreateBook } from "../components";

export function UiHome() {
  const openFormCreateBook = useBoolean();
  const { name, email, books } = useBookStore((store) => store.books);
  return (
    <section className={style.home}>
      {name} {email}
      <div className={style.sectionCreate}>
        <button className={style.btnCreate} onClick={openFormCreateBook.onTrue}>
          Crear Libreta
        </button>
      </div>
      <div className={style.contentBooks}>
        {books.map((item) => (
          <UiBook
            key={item.id}
            nameBook={item.title}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
      {openFormCreateBook.value && (
        <UiPopUp>
          <UiFormCreateBook onClose={openFormCreateBook.onFalse} />
        </UiPopUp>
      )}
    </section>
  );
}
