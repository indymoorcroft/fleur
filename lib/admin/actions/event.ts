"use server";

import { db } from "@/database/drizzle";
import { events } from "@/database/schema";

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
