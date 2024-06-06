"use server";

import { db } from "@/store/db";
import { revalidatePath } from "next/cache";

export const deleteSpot = async (id: string) => {
  try {
    await db.deleteFrom("spots").where("id", "=", id).execute();
    revalidatePath("/spots");
  } catch (e) {
    throw new Error(
      e instanceof Error ? e.message : "An error occurred deleting spot"
    );
  }
};
