import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { title } from "process";

export default defineSchema({
  // Other tables here...

  books: defineTable({
    books: v.array(
      v.object({
        description: v.string(),
        id: v.string(),
        title: v.string(),
      })
    ),
    email: v.string(),
    img: v.string(),
    name: v.string(),
    section: v.array(
      v.object({
        content: v.string(),
        id: v.string(),
        titleSection: v.string(),
        idBook: v.string(),
      })
    ),
    category: v.array(
      v.object({
        id: v.string(),
        title: v.string(),
        idBook: v.string(),
        pages: v.array(
          v.object({ id: v.string(), content: v.string(), title: v.string() })
        ),
      })
    ),
  }),
  user: defineTable({
    email: v.string(),
    img: v.string(),
    name: v.string(),
    typeLogin: v.string(),
  }),
});
