CREATE EXTENSION ulid;

CREATE SCHEMA "auth";

CREATE TABLE IF NOT EXISTS "auth"."user"(
  "id" text DEFAULT gen_ulid() NOT NULL,
  "email" text NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "updated_at" timestamp with time zone DEFAULT now() NOT NULL,
  CONSTRAINT "user_email_unique" UNIQUE ("email")
);

