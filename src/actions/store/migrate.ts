"use server";

import { db } from "@/store/db";
import { down, up } from "../../../migrations/002_create_db";

export const databaseDown = async () => {
  try {
    await down(db);
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "An error occurred");
  }
};

export const databaseUp = async () => {
  try {
    await up(db);
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "An error occurred");
  }
};
