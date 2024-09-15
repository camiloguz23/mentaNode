import { Id } from "./../../../convex/_generated/dataModel.d";
import { create } from "zustand";
import { UserBooksInterfaces } from "../types";

interface StoreInterface {
  books: UserBooksInterfaces;
  setDataUser: (data: {
    name: string;
    email: string;
    img: string;
  }) => void;
  createBook: (body: {
    title: string;
    description: string;
    id: string;
  }) => void;
}

export const useBookStore = create<StoreInterface>((set) => ({
  books: {
    id: "",
    email: "",
    name: "",
    img: "",
    books: [],
    section: [],
  },
  setDataUser: (data) =>
    set((state) => ({
      books: {
        ...state.books,
        name: data.name,
        email: data.email,
        img: data.img,
      },
    })),
  createBook: (body) =>
    set((state) => ({
      books: {
        ...state.books,
        books: [
          ...state.books.books,
          {
            id: body.id,
            title: body.title,
            description: body.description,
            section: [],
          },
        ],
      },
    })),
}));
