"use server";

import { db } from "@/store/db";

export const getAllSpots = async () => {
  try {
    const spots = await db.selectFrom("spots").selectAll().execute();
    return spots;
  } catch (error) {
    console.error(error);
  }
};
