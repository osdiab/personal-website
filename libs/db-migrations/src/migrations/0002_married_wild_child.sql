CREATE TABLE IF NOT EXISTS "blog"."post" (
	"id" text DEFAULT gen_ulid() NOT NULL,
	"title" text,
	"body" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
