"use client";

import React from "react";
import style from "./home.module.css";
import UiBook from "../components/books/ui-book";

export function UiHome() {
  return (
    <section className={style.home}>
      <h2>Books</h2>
      <div className={style.contentBooks}>
        <UiBook nameBook="Book 1" />
      </div>
    </section>
  );
}
