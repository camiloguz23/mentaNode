"use client";

import React, { useEffect } from "react";
import style from "./home.module.css";
import UiBook from "../../components/books/ui-book";
import {
  IconPlus,
  UiPopUp,
  useBookStore,
  useBoolean,
  UserBooksInterfaces,
  UserDataGoogle,
} from "@/shared";
import { UiFormCreateBook } from "../../components";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

interface Props {
  userGoogle: UserDataGoogle;
}

export function UiHome({ userGoogle }: Props) {
  const openFormCreateBook = useBoolean();
  const { setDataUser } = useBookStore((store) => store);
  const bookUser: UserBooksInterfaces | undefined | null = useQuery(
    api.query.getBooksUser,
    {
      email: userGoogle?.email ?? "",
    }
  );
  useEffect(() => {
    setDataUser({
      name: userGoogle?.name ?? "",
      email: userGoogle?.email ?? "",
      img: userGoogle?.picture ?? "",
    });
  }, [userGoogle]);

  return (
    <section className={style.home}>
      <button className={style.btnCreate} onClick={openFormCreateBook.onTrue}>
        <IconPlus className={"icon"} />
      </button>

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
