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