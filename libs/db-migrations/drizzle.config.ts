import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/*/schema.ts",
  out: "./src/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgresql://postgres:postgrespassword@localhost:8001/postgres",
  },
} satisfies Config;
