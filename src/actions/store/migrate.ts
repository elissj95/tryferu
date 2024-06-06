"use server";

import { db } from "@/store/db";
import { down, up } from "../../../migrations/001_create_db";

export const databaseDown = async () => {
  try {
    down(db);
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "An error occurred");
  }
};

export const databaseUp = async () => {
  try {
    up(db);
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : "An error occurred");
  }
};
