"use server";

import { db } from "@/store/db";

export const getSession = async (id: string) => {
  try {
    return await db
      .selectFrom("spearfishing_logs")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirst();
  } catch (error) {
    console.error(error);
  }
};
