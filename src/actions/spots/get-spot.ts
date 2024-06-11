"use server";

import { db } from "@/store/db";

export const getSpot = async (id: string) => {
  try {
    const spots = await db
      .selectFrom("spots")
      .selectAll()
      .where("id", "=", id)
      .executeTakeFirst();
    return spots;
  } catch (error) {
    console.error(error);
  }
};
