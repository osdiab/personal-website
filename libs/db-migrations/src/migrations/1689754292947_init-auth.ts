import { Migration } from "kysely";
import { sql } from "kysely";

export const up: Migration["up"] = async (db) => {
  // this is how you run arbitrary SQL in a Kysely migration
  await sql`CREATE EXTENSION ulid`.execute(db);
  await db.schema.createSchema("auth").execute();

  await db.schema
    .createTable("auth.user")
    // this is how you set an arbitrary data type in Kysely migrations
    .addColumn("id", sql`ulid`, (col) =>
      col.primaryKey().defaultTo(sql`gen_ulid()`)
    )
    .addColumn("email", "text", (col) => col.unique().notNull())
    .addColumn("createdAt", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn("updatedAt", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();

  // this will be used with all other tables, it's general
  await sql`CREATE OR REPLACE FUNCTION "public"."trg_set_updated_at"()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.updatedAt := NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;`.execute(db);

  // apply it to this table
  await sql`CREATE TRIGGER set_updated_at
BEFORE UPDATE ON auth.user
FOR EACH ROW
EXECUTE FUNCTION trg_set_updated_at();`.execute(db);
  // Migration code
};

export const down: Migration["down"] = async (db) => {
  await sql`DROP TRIGGER set_updated_at ON auth.user`.execute(db);
  await sql`DROP FUNCTION "public"."trg_set_updated_at"()`.execute(db);
  await db.schema.dropTable("auth.user").execute();
  await db.schema.dropSchema("auth").execute();
  await sql`DROP EXTENSION ulid`.execute(db);
};
