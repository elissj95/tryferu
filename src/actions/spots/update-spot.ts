"use server";

import { db } from "@/store/db";

export const updateSpot = async (
  id: string,
  spot: {
    name: string;
    coordinates: string;
    description: string;
    type: string;
  }
) => {
  try {
    await db.updateTable("spots").set(spot).where("id", "=", id).execute();
  } catch (e) {
    throw new Error(
      e instanceof Error ? e.message : "An error occurred updating spot"
    );
  }
};
