import { ColumnDefinitions, PgLiteral } from "node-pg-migrate";
import { MigrationAction } from "node-pg-migrate/dist/types";

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
  pgm.createSchema("auth");
  pgm.createExtension("ulid");
  pgm.createTable(
    { schema: "auth", name: "user" },
    {
      id: "id",
      created_at: "lifecycleTimestamp",
      updated_at: "lifecycleTimestamp",
      email: { type: "text", unique: true, notNull: true },
    }
  );
  pgm.createFunction(
    "trg_set_updated_at",
    [],
    {
      returns: "trigger",
      language: "plpgsql",
    },
    "BEGIN NEW.updated_at := NOW(); RETURN NEW; END;"
  );
  pgm.createTrigger({ schema: "auth", name: "user" }, "set_updated_at", {
    operation: "update",
    when: "BEFORE",
    level: "ROW",
    function: "trg_set_updated_at",
  });
};

// down migration is automatically inferred
