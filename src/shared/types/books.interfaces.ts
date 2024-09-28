import { SectionFromBookInterfaces } from "./section-book";

export interface BooksInterfaces {
  title: string;
  description: string;
  id: string;
}

export interface PageCategorie {
  id: string;
  content: string;
  title: string;
}

export interface Categories {
  id: string;
  title: string;
  idBook: string;
  pages: PageCategorie[];
}

export interface UserBooksInterfaces {
  email: string;
  name: string;
  img: string;
  books: BooksInterfaces[];
  section: SectionFromBookInterfaces[];
  category: Categories[];
}
