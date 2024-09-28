import { create } from "zustand";
import { UserBooksInterfaces } from "../types";

interface StoreInterface {
  books: UserBooksInterfaces;
  setDataUser: (data: UserBooksInterfaces) => void;
}

export const useBookStore = create<StoreInterface>((set) => ({
  books: {
    id: "",
    email: "",
    name: "",
    img: "",
    books: [],
    section: [],
    category: [],
  },
  setDataUser: (data) =>
    set((state) => {
      return {
        books: {
          ...state.books,
          ...data,
        },
      };
    }),
}));
