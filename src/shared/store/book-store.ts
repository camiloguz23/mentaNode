import { create } from "zustand";
import { UserBooksInterfaces } from "../types";

interface StoreInterface {
  books: UserBooksInterfaces;
}

export const useBookStore = create<StoreInterface>((set) => ({
  books: {
    email: "",
    name: "",
    img: "",
    books: [],
  },
}));
