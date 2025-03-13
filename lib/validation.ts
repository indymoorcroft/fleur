import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const eventSchema = z.object({
  title: z.string().trim().min(2).max(100),
  venue: z.string().trim().min(2).max(100),
  location: z.string().trim().min(2).max(100),
  promoters: z.string().nonempty(),
  genre: z.string().trim().min(2).max(100),
  startDateTime: z.date({
    required_error: "A date and time is required.",
  }),
  endDateTime: z.date({
    required_error: "A date and time is required.",
  }),
  description: z.string().trim().min(10).max(1000),
  availableTickets: z.coerce.number().int().positive().lte(100000),
  imageUrl: z.string().nonempty(),
});
