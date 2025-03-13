CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"venue" text NOT NULL,
	"location" text NOT NULL,
	"promoters" text NOT NULL,
	"genre" text NOT NULL,
	"start_date_time" text,
	"end_date_time" text,
	"description" text NOT NULL,
	"available_tickets" integer DEFAULT 0 NOT NULL,
	"image_url" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "events_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "user_event_records" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"event_id" uuid NOT NULL,
	"sign_up_date" timestamp with time zone DEFAULT now() NOT NULL,
	"status" "attending_status" DEFAULT 'ATTENDING' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "user_event_records_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "user_event_records" ADD CONSTRAINT "user_event_records_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_event_records" ADD CONSTRAINT "user_event_records_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;