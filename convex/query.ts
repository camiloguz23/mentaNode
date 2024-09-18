import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const onAddUser = mutation({
  args: {
    email: v.string(),
    type: v.string(),
    name: v.string(),
    img: v.string(),
  },
  handler: async (ctx, args) => {
    const { email, type, name, img } = args;
    const user = await ctx.db
      .query("books")
      .filter((u) => u.eq(u.field("email"), email))
      .unique();
    if (!user?.email) {
      const useID = await ctx.db.insert("user", {
        email: email,
        name,
        img,
        typeLogin: type,
      });
      const bookUser = await ctx.db.insert("books", {
        email,
        section: [],
        books: [],
        name,
        img,
      });
      const user = await ctx.db
        .query("books")
        .filter((u) => u.eq(u.field("_id"), bookUser))
        .unique();
      return user;
    }
    return user;
  },
});

export const getBooksUser = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const books = await ctx.db
      .query("books")
      .filter((b) => b.eq(b.field("email"), args.email))
      .unique();
    return books;
  },
});

export const addNewBook = mutation({
  args: {
    email: v.string(),
    idBook: v.string(),
    title: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    const { description, email, idBook, title } = args;
    const book = await ctx.db
      .query("books")
      .filter((b) => b.eq(b.field("email"), email))
      .unique();

    if (!book) {
      return;
    }

    const id = book._id;

    const newBook = book?.books.map((item) => item);
    newBook?.push({ description, id: idBook, title });
    await ctx.db.patch(id, { books: newBook });
    return newBook;
  },
});

export const createPage = mutation({
  args: {
    body: v.object({
      id: v.string(),
      content: v.string(),
      titleSection: v.string(),
      idBook: v.string(),
    }),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const { body, email } = args;
    const book = await ctx.db
      .query("books")
      .filter((b) => b.eq(b.field("email"), email))
      .unique();
    if (!book) {
      return;
    }
    const id = book._id;
    const newBook = book?.section.map((item) => item);
    newBook?.push(body);
    await ctx.db.patch(id, { section: newBook });
    return newBook;
  },
});

export const saveContent = mutation({
  args: {
    content: v.string(),
    idPage: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const { content, email, idPage } = args;
    const book = await ctx.db
      .query("books")
      .filter((b) => b.eq(b.field("email"), email))
      .unique();
    if (!book) {
      return;
    }
    const id = book._id;
    const updateContentPage = book?.section.map((item) => item);
    const addContent = updateContentPage?.map((item) => {
      return item.id === idPage ? { ...item, content } : item;
    });

    await ctx.db.patch(id, { section: addContent });
  },
});
