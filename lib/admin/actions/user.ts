"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { desc, eq } from "drizzle-orm";

export const getAllUsers = async () => {
  try {
    const allUsers = await db
      .select()
      .from(users)
      .orderBy(desc(users.createdAt));

    return {
      success: true,
      data: JSON.parse(JSON.stringify(allUsers)),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while fetching the users",
    };
  }
};

export const checkIsSuperAdmin = async (id: string) => {
  return await db
    .select({ isAdmin: users.role })
    .from(users)
    .where(eq(users.id, id))
    .limit(1)
    .then((res) => res[0]?.isAdmin === "SUPER ADMIN");
};

export const updateAdminStatus = async (
  isAdmin: string | boolean,
  id: string
) => {
  try {
    const result = isAdmin
      ? await db
          .update(users)
          .set({ role: "USER" })
          .where(eq(users.id, id))
          .returning()
      : await db
          .update(users)
          .set({ role: "ADMIN" })
          .where(eq(users.id, id))
          .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(result[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occured while updating the user status",
    };
  }
};
