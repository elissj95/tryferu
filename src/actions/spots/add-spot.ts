"use server";

import { db } from "@/store/db";
import { revalidatePath } from "next/cache";

export const addSpot = async (spot: { name: string; coordinates: string }) => {
  try {
    await db.insertInto("spots").values(spot).execute();
    revalidatePath("/spots");
  } catch (e) {
    throw new Error(
      e instanceof Error ? e.message : "An error occurred adding spot"
    );
  }
};
