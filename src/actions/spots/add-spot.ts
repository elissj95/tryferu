"use server";

import { SpotFormData } from "@/features/spots/types/spot-schema";
import { db } from "@/store/db";
import { revalidatePath } from "next/cache";

export const addSpot = async (spot: SpotFormData) => {
  try {
    await db.insertInto("spots").values(spot).execute();
    revalidatePath("/spots");
  } catch (e) {
    throw new Error(
      e instanceof Error ? e.message : "An error occurred adding spot"
    );
  }
};
