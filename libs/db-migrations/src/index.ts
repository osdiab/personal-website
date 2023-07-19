import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { join } from "path";
import postgres from "postgres";

async function runMigrations() {
  const connectionString =
    "postgresql://postgres:postgrespassword@localhost:8001/postgres";
  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);

  await migrate(db, { migrationsFolder: join("src/migrations") });
}

runMigrations()
  .then(() => {
    console.log("Done!");
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
