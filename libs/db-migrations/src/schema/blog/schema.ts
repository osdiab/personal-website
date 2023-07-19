import { sql } from "drizzle-orm";
import { pgSchema, text, timestamp } from "drizzle-orm/pg-core";

const blogSchema = pgSchema("blog");
export const user = blogSchema.table("post", {
  id: text("id")
    .default(sql`gen_ulid()`)
    .notNull(),
  title: text("title"),
  body: text("body"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
