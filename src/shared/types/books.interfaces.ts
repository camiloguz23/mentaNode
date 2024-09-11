import { SectionFromBookInterfaces } from "./section-book";

export interface BooksInterfaces {
  title: string;
  description: string;
  id: string;
}

export interface UserBooksInterfaces {
  email: string;
  name: string;
  img: string;
  books: BooksInterfaces[];
  section: SectionFromBookInterfaces[];
}
