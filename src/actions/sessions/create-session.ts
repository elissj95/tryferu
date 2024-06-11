"use server";

import { SessionFormData } from "@/features/sessions/types/session-schema";
import { db } from "@/store/db";
import { revalidatePath } from "next/cache";

export const createSession = async (session: SessionFormData) => {
  try {
    await db.insertInto("spearfishing_logs").values(session).execute();
    revalidatePath("/sessions");
  } catch (e) {
    throw new Error(
      e instanceof Error ? e.message : "An error occurred adding spot"
    );
  }
};
