"use server";

import { db } from "@/database/drizzle";
import { events } from "@/database/schema";
import { eq } from "drizzle-orm";

export const createEvent = async (params: EventParams) => {
  try {
    const newEvent = await db
      .insert(events)
      .values({
        ...params,
        startDateTime: params.startDateTime.toString(),
        endDateTime: params.endDateTime.toString(),
      })
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newEvent[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while creating the event",
    };
  }
};

export const updateEvent = async (params: EventParams, eventId: string) => {
  try {
    const updateEvent = await db
      .update(events)
      .set({
        title: params.title,
        venue: params.title,
        location: params.location,
        promoters: params.promoters,
        genre: params.genre,
        startDateTime: params.startDateTime.toString(),
        endDateTime: params.endDateTime.toString(),
        description: params.description,
        availableTickets: params.availableTickets,
        imageUrl: params.imageUrl,
      })
      .where(eq(events.id, eventId))
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(updateEvent[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while updating the event",
    };
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    await db.delete(events).where(eq(events.id, eventId));

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while deleting the event",
    };
  }
};

export const editEvent = async () => {
  console.log("edit event selected");
};
