import { query } from "./_generated/server";
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
