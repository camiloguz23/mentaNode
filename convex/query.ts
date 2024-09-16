import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

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
