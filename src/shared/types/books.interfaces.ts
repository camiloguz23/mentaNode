export interface SectionFromBookInterfaces {
  titleSection: string;
  content: string;
}

export interface BooksInterfaces {
  title: string;
  description: string;
  section: SectionFromBookInterfaces[];
}

export interface UserBooksInterfaces {
  email: string;
  name: string;
  img: string;
  books: BooksInterfaces[];
}
