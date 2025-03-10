import {
  date,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);
export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);
export const ATTENDING_STATUS_ENUM = pgEnum("attending_status", [
  "ATTENDING",
  "NOT ATTENDING",
]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  status: STATUS_ENUM("status").default("PENDING"),
  role: ROLE_ENUM("role").default("USER"),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const events = pgTable("events", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  venue: text("venue").notNull(),
  location: text("location").notNull(),
  promoters: text("promoters").notNull(),
  genre: text("genre").notNull(),
  date: date(),
  description: text("description").notNull(),
  availableTickets: integer("available_tickets").notNull().default(0),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
