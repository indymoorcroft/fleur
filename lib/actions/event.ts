"use server";

import { db } from "@/database/drizzle";
import { events, userEventRecords } from "@/database/schema";
import { and, eq, desc } from "drizzle-orm";

export const eventSignUp = async (params: EventSignUpParams) => {
  const { userId, eventId } = params;

  try {
    const event = await db
      .select({ availableTickets: events.availableTickets })
      .from(events)
      .where(eq(events.id, eventId))
      .limit(1);

    if (!event.length || event[0].availableTickets <= 0) {
      return {
        success: false,
        error: "Event is not available",
      };
    }

    const record = await db.insert(userEventRecords).values({
      userId,
      eventId,
      status: "ATTENDING",
    });

    await db
      .update(events)
      .set({ availableTickets: event[0].availableTickets - 1 })
      .where(eq(events.id, eventId));

    return {
      success: true,
      data: JSON.parse(JSON.stringify(record)),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: "An error occurred while signing up to the event",
    };
  }
};

export const removeSignUp = async (params: EventSignUpParams) => {
  const { userId, eventId } = params;

  try {
    const event = await db
      .select({ availableTickets: events.availableTickets })
      .from(events)
      .where(eq(events.id, eventId))
      .limit(1);

    const record = await db
      .delete(userEventRecords)
      .where(
        and(
          eq(userEventRecords.eventId, eventId),
          eq(userEventRecords.userId, userId)
        )
      );

    await db
      .update(events)
      .set({ availableTickets: event[0].availableTickets + 1 })
      .where(eq(events.id, eventId));

    return {
      success: true,
      data: JSON.parse(JSON.stringify(record)),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: "An error occurred",
    };
  }
};

export const getAllEvents = async () => {
  try {
    const allEvents = (await db
      .select()
      .from(events)
      .orderBy(desc(events.createdAt))) as Listing[];

    return {
      success: true,
      data: JSON.parse(JSON.stringify(allEvents)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while fetching the events",
    };
  }
};

export const getEventById = async (id: string) => {
  try {
    const event = await db
      .select()
      .from(events)
      .where(eq(events.id, id))
      .limit(1);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(event)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while fetching the event",
    };
  }
};
