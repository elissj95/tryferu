"use server";

import { db } from "@/store/db";

export const getAllSessions = async () => {
  try {
    return await db.selectFrom("spearfishing_logs").selectAll().execute();
  } catch (error) {
    console.error(error);
  }
};
