"use client";

import React from "react";
import style from "./home.module.css";
import UiBook from "../components/books/ui-book";
import {
  UiPopUp,
  useBookStore,
  useBoolean,
  UserBooksInterfaces,
} from "@/shared";
import { UiFormCreateBook } from "../components";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { json } from "stream/consumers";

export function UiHome() {
  const openFormCreateBook = useBoolean();
  const { name, email, books } = useBookStore((store) => store.books);
  const { user } = useUser();
  const bookUser: UserBooksInterfaces = useQuery(api.query.getBooksUser, {
    email: user?.emailAddresses[0].emailAddress ?? "",
  });
  return (
    <section className={style.home}>
      {user?.firstName} {user?.fullName}{" "}
      {user?.emailAddresses[0].emailAddress}
      <div className={style.sectionCreate}>
        <button className={style.btnCreate} onClick={openFormCreateBook.onTrue}>
          Crear Libreta
        </button>
      </div>
      <div className={style.contentBooks}>
        {bookUser?.books.map((item) => (
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
