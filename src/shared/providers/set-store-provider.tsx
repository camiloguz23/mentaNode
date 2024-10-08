"use client";

import React, { useEffect } from "react";
import { UserBooksInterfaces, UserDataGoogle } from "../types";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useBookStore } from "../store";

interface Props {
  children: React.ReactNode;
  userGoogle: UserDataGoogle | null;
}

export function SetStoreProvider({ children, userGoogle }: Props) {
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
      section: bookUser?.section ?? [],
      category: bookUser?.category ?? [],
      books: bookUser?.books ?? [],
    });
  }, [userGoogle, bookUser, setDataUser]);

  return <>{children}</>;
}
