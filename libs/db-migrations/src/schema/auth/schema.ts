import { sql } from "drizzle-orm";
import { pgSchema, text, timestamp } from "drizzle-orm/pg-core";

const authSchema = pgSchema("auth");
export const user = authSchema.table("user", {
  id: text("id")
    .default(sql`gen_ulid()`)
    .notNull(),
  email: text("email").unique().notNull(),
  someMeta: text("someMeta"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
