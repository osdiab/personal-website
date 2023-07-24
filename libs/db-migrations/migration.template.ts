import type { ColumnDefinitions } from "node-pg-migrate";
import { PgLiteral } from "node-pg-migrate";
import type { MigrationAction } from "node-pg-migrate/dist/types";

// see https://salsita.github.io/node-pg-migrate/#/migrations for details on how
// to use these
export const shorthands: ColumnDefinitions = {
  id: {
    type: "ulid",
    primaryKey: true,
    default: PgLiteral.create("gen_ulid()"),
  },
  lifecycleTimestamp: {
    type: "timestamptz",
    default: PgLiteral.create("now()"),
    notNull: true,
  },
};

export const up: MigrationAction = (pgm) => {
  // delete this body, just makes lint/compile happy
  console.log(pgm);
  throw new Error("Not yet implemented");
};

// down migration is automatically inferred if not provided.
// https://salsita.github.io/node-pg-migrate/#/migrations?id=automatic-down-migrations
// this may not always work especially if your migration includes:
// - custom SQL (pgm.sql)
// - dropping, renaming, or altering anything in the DB (as the reverse
//   operation depends on whatever the original definition was, which isn't
//   known without introspecting the DB)
//
// an exhaustive list is available in the documentation for each operation; if
// `Reverse Operation` is not present, then it cannot be reversed automatically.
//
// if you use the inferred down migration, make sure to at least ensure that it
// works, by applying the up migration, then running the down migration, and
// inspecting that the database looks like it is in a proper state
//
// otherwise, uncomment this function to explicitly create a down migration.

// export const down: MigrationAction = (pgm) => {
//   throw new Error("Not yet implemented");
// };
