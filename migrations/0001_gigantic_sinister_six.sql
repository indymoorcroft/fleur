CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"venue" text NOT NULL,
	"location" text NOT NULL,
	"promoters" text NOT NULL,
	"genre" text NOT NULL,
	"date" date,
	"description" text NOT NULL,
	"available_copies" integer DEFAULT 0 NOT NULL,
	"image_url" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "events_id_unique" UNIQUE("id")
);
