"use server";

import { SpotFormData } from "@/features/spots/types/spot-schema";
import { db } from "@/store/db";
import { revalidatePath } from "next/cache";

export const updateSpot = async (id: string, spot: SpotFormData) => {
  try {
    await db.updateTable("spots").set(spot).where("id", "=", id).execute();
    revalidatePath("/spots");
  } catch (e) {
    throw new Error(
      e instanceof Error ? e.message : "An error occurred updating spot"
    );
  }
};
